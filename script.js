// Navegação
document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Navegação por links
    const navLinks = document.querySelectorAll('.sidebar-menu a');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Show corresponding section
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            
            // Close mobile menu if open
            if (sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    });

    // Navegação por hash na URL
    const handleHashChange = () => {
        const hash = window.location.hash.substring(1) || 'about';
        const targetLink = document.querySelector(`.sidebar-menu a[href="#${hash}"]`);
        
        if (targetLink) {
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            targetLink.classList.add('active');
            document.getElementById(hash).classList.add('active');
        }
    };

    // Handle initial hash and hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // Botões de copiar código
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = 'Copiar';
        button.setAttribute('data-tooltip', 'Copiar para a área de transferência');
        
        block.parentNode.style.position = 'relative';
        block.parentNode.appendChild(button);
        
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(block.textContent);
                button.textContent = 'Copiado!';
                button.style.backgroundColor = 'var(--success-color)';
                
                setTimeout(() => {
                    button.textContent = 'Copiar';
                    button.style.backgroundColor = '';
                }, 2000);
            } catch (err) {
                button.textContent = 'Erro!';
                button.style.backgroundColor = 'var(--danger-color)';
                
                setTimeout(() => {
                    button.textContent = 'Copiar';
                    button.style.backgroundColor = '';
                }, 2000);
            }
        });
    });

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', () => {
            const tooltipText = tooltip.getAttribute('data-tooltip');
            const tooltipElement = document.createElement('div');
            tooltipElement.className = 'tooltip';
            tooltipElement.textContent = tooltipText;
            
            document.body.appendChild(tooltipElement);
            
            const rect = tooltip.getBoundingClientRect();
            tooltipElement.style.top = `${rect.top - tooltipElement.offsetHeight - 10}px`;
            tooltipElement.style.left = `${rect.left + (rect.width / 2) - (tooltipElement.offsetWidth / 2)}px`;
            
            setTimeout(() => {
                tooltipElement.style.opacity = '1';
            }, 10);
        });
        
        tooltip.addEventListener('mouseleave', () => {
            const tooltipElement = document.querySelector('.tooltip');
            if (tooltipElement) {
                tooltipElement.style.opacity = '0';
                setTimeout(() => {
                    tooltipElement.remove();
                }, 200);
            }
        });
    });
}); 