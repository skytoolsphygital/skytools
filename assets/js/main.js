const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

const isEnglish = document.documentElement.lang === 'en';
const leadMessages = isEnglish ? {
  required: 'Please complete the required fields and consent to data processing.',
  sending: 'Sending your inquiry…',
  success: 'Your inquiry was received. We will contact you shortly.',
  error: 'We could not confirm your inquiry at this time. You can email us directly at '
} : {
  required: 'Por favor completa los campos obligatorios y acepta el tratamiento de datos.',
  sending: 'Enviando solicitud…',
  success: 'Solicitud enviada correctamente. Muy pronto nos pondremos en contacto contigo.',
  error: 'No fue posible confirmar el registro en este momento. Puedes escribirnos directamente a '
};
const form = document.getElementById('leadForm');
const statusBox = document.getElementById('formStatus');
if (form && statusBox) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const website = (data.get('website') || '').trim();
    if (website) return;
    const cfg = window.SKYTOOLS_CONFIG || {};
    const payload = {
      source_site: 'skytools-main',
      name: (data.get('nombre') || '').trim(),
      email: (data.get('correo') || '').trim(),
      phone: (data.get('telefono') || '').trim(),
      project_type: 'MAIN WEB | ' + ((data.get('tema') || '').trim() || 'Consulta general'),
      message: (data.get('mensaje') || '').trim(),
      privacy_consent: data.get('privacy_consent') === 'on',
      landing_page: window.location.href,
      referrer: document.referrer || ''
    };
    if (!payload.name || !payload.email || !payload.message || !payload.privacy_consent) {
      statusBox.className = 'form-status error';
      statusBox.textContent = leadMessages.required;
      return;
    }
    statusBox.className = 'form-status';
    statusBox.textContent = leadMessages.sending;
    const submit = form.querySelector('button[type="submit"]');
    if (submit) submit.disabled = true;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(cfg.leadApiUrl, {
        method: 'POST',
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + cfg.supabaseAnonKey,
          'apikey': cfg.supabaseAnonKey
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.ok !== true || result.stored !== true || !result.lead_id) throw new Error('Lead no confirmado');
      form.reset();
      statusBox.className = 'form-status success';
      statusBox.textContent = leadMessages.success;
    } catch (error) {
      statusBox.className = 'form-status error';
      statusBox.textContent = leadMessages.error;
      const support = document.createElement('a');
      support.href = 'mailto:skytools.com@gmail.com';
      support.textContent = 'skytools.com@gmail.com';
      statusBox.appendChild(support);
    } finally { clearTimeout(timer); if (submit) submit.disabled = false; }
  });
}


// Enlace directo de asesoría: preselecciona la vertical en el mismo formulario comercial.
document.querySelectorAll('[data-servicio]').forEach((link)=>{
  link.addEventListener('click',()=>{
    const selected=link.getAttribute('data-servicio');
    const select=document.querySelector('#leadForm select[name="tema"]');
    if(select && Array.from(select.options).some((opt)=>opt.value===selected)){
      select.value=selected;
    }
  });
});

// Navegacion compartida: aislamiento total del formulario Supabase y de GA4.
(() => {
  const switcher = document.getElementById('ecosystemSwitcher');
  if (!switcher) return;
  document.addEventListener('click', (event) => {
    if (switcher.open && !switcher.contains(event.target)) switcher.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && switcher.open) {
      switcher.open = false;
      switcher.querySelector('summary')?.focus();
    }
  });
  switcher.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => { switcher.open = false; });
  });
  const navToggle = document.getElementById('menuToggle');
  navToggle?.addEventListener('click', () => { switcher.open = false; });
  switcher.addEventListener('toggle', () => {
    if (switcher.open) {
      const mainNav = document.getElementById('mainNav');
      const mainToggle = document.getElementById('menuToggle');
      mainNav?.classList.remove('open');
      mainToggle?.setAttribute('aria-expanded','false');
    }
  });
})();

// SKYTOOLS GLOBAL: Preserve the current section when switching ES / EN.
// The same IDs are intentionally kept in both language versions.
document.querySelectorAll('.language-switcher a[href="/"], .language-switcher a[href="/en/"]').forEach((link) => {
  link.addEventListener('click', () => {
    const hash = window.location.hash;
    if (hash && /^#[A-Za-z][\w-]*$/.test(hash) && document.getElementById(hash.slice(1))) {
      link.href = link.getAttribute('href').split('#')[0] + hash;
    }
  });
});
