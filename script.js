// efek hover halus untuk skills dan project list
document.querySelectorAll('.chips span, .projects li').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    el.style.transform = 'translateY(-2px)';
    el.style.boxShadow = '0 10px 26px rgba(0,0,0,0.75)';
    el.style.background = '#ffffff';
    el.style.color = '#000000';
  });

  el.addEventListener('mouseleave', () => {
    el.style.transform = 'translateY(0)';
    el.style.boxShadow = 'none';
    el.style.background =
      'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0))';
    el.style.color = '';
  });
});
