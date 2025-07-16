  
    function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username && password) {
        localStorage.setItem('user', username);
        document.getElementById('auth').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
      } else {
        alert('Please enter credentials.');
      }
    }

    function showSection(id, link) {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');
      sections.forEach(sec => sec.classList.add('hidden'));
      document.getElementById(id).classList.remove('hidden');
      navLinks.forEach(l => l.classList.remove('active-link'));
      link.classList.add('active-link');
    }

    function toggleLike(btn) {
      btn.classList.toggle('liked');
      btn.textContent = btn.classList.contains('liked') ? 'Liked' : 'Like';
    }

    function togglePanel(header) {
      const panel = header.nextElementSibling;
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    }

    window.onload = () => {
      if (localStorage.getItem('user')) {
        document.getElementById('auth').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
      }
    };
  