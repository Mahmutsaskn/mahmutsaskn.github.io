   // Yukarı Çık Butonu kontrolü
const yukariBtn = document.getElementById("yukari-btn");

// Kaydırınca butonu göster/gizle
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    yukariBtn.style.display = "flex";
  } else {
    yukariBtn.style.display = "none";
  }
});

// Yukarı kaydırma işlevi
yukariBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
	
	
	
	
	
	
	document.querySelectorAll('.menu a').forEach(link => {
  const text = link.textContent;
  link.textContent = '';
  text.split('').forEach(char => {
    const span = document.createElement('span');
    span.textContent = char;
    link.appendChild(span);
  });
});
	
	
	
	
	
	
	
const menuToggle = document.getElementById('hamburger-menu-toggle');
const menuLinks = document.getElementById('hamburger-menu-links');

menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('show');
});



	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
      const defaultConfig = {
      main_title: "Projelerim",
      project_1_category: "Web Tasarım",
      project_1_description: "Modern ve kullanıcı dostu web sitesi tasarımı",
      project_2_category: "Mobil Uygulama",
      project_2_description: "iOS ve Android için native mobil uygulama",
      project_3_category: "E-Ticaret",
      project_3_description: "Tam özellikli online alışveriş platformu",
      project_4_category: "Oyun Geliştirme",
      project_4_description: "Unity ile 3D oyun geliştirme projesi",
      project_5_category: "Yapay Zeka",
      project_5_description: "Machine Learning tabanlı chatbot sistemi",
      button_text: "Projeye Git",
      background_color: "#ff0000",
      surface_color: "#ffffff",
      text_color: "#333333",
      primary_action_color: "#ff0000",
      secondary_action_color: "#0000ff",
      font_family: "Segoe UI",
      font_size: 16
    };

    const projects = [
      { emoji: '🎨', url: 'https://example.com/project1', image: 'https://example.com/project1.jpg' },
      { emoji: '📱', url: 'https://example.com/project2', image: 'https://example.com/project2.jpg' },
      { emoji: '🛒', url: 'https://example.com/project3', image: 'https://example.com/project3.jpg' },
      { emoji: '🎮', url: 'https://example.com/project4', image: 'https://example.com/project4.jpg' },
      { emoji: '🤖', url: 'https://example.com/project5', image: 'https://example.com/project5.jpg' }
    ];

    let currentProject = null;

    async function onConfigChange(config) {
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = 'Tahoma, Geneva, Verdana, sans-serif';
      const baseSize = config.font_size || defaultConfig.font_size;

      document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

      const mainTitle = document.getElementById('mainTitle');
      mainTitle.textContent = config.main_title || defaultConfig.main_title;
      mainTitle.style.fontSize = `${baseSize * 3}px`;

      for (let i = 1; i <= 5; i++) {
        const category = document.getElementById(`category${i}`);
        const description = document.getElementById(`description${i}`);
        
        category.textContent = config[`project_${i}_category`] || defaultConfig[`project_${i}_category`];
        category.style.fontSize = `${baseSize * 0.875}px`;
        
        description.textContent = config[`project_${i}_description`] || defaultConfig[`project_${i}_description`];
        description.style.fontSize = `${baseSize * 1.125}px`;
      }

      const projectButton = document.getElementById('projectButton');
      projectButton.textContent = config.button_text || defaultConfig.button_text;
      projectButton.style.fontSize = `${baseSize}px`;

      const modalDescription = document.getElementById('modalDescription');
      modalDescription.style.fontSize = `${baseSize * 1.125}px`;

      const modalCategory = document.getElementById('modalCategory');
      modalCategory.style.fontSize = `${baseSize * 0.875}px`;
    }

    // Kart tıklama olaylarını ekle
    function openModal(projectNum) {
      currentProject = projects[projectNum - 1];
      
      const config = window.elementSdk ? window.elementSdk.config : defaultConfig;
      
      const modal = document.getElementById('modal');
      const modalImage = document.getElementById('modalImage');
      
      // Modal içeriğini güncelle
      modalImage.innerHTML = currentProject.emoji;
      
      document.getElementById('modalDescription').textContent = config[`project_${projectNum}_description`] || defaultConfig[`project_${projectNum}_description`];
      document.getElementById('modalCategory').textContent = config[`project_${projectNum}_category`] || defaultConfig[`project_${projectNum}_category`];
      
      // Modal'ı göster
      modal.style.display = 'flex';
      setTimeout(() => {
        modal.classList.add('active');
      }, 10);
    }

    function addCardClickEvents() {
      document.querySelectorAll('.project-portfolio-widget .project-card').forEach((card, index) => {
        card.onclick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const projectNum = parseInt(this.dataset.project);
          openModal(projectNum);
          return false;
        };
      });
    }
    
    // Sayfa yüklendiğinde hemen ekle
    addCardClickEvents();

    document.getElementById('closeBtn').addEventListener('click', () => {
      const modal = document.getElementById('modal');
      modal.style.display = 'none';
      modal.classList.remove('active');
    });

    document.getElementById('modal').addEventListener('click', (e) => {
      if (e.target.id === 'modal') {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
        modal.classList.remove('active');
      }
    });

    document.getElementById('projectButton').addEventListener('click', () => {
      if (currentProject) {
        window.open(currentProject.url, '_blank', 'noopener,noreferrer');
      }
    });

    // Kaydırma butonları
    const projectsGrid = document.getElementById('projectsGrid');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    scrollLeftBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    });

    scrollRightBtn.addEventListener('click', () => {
      projectsGrid.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    });

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                config.surface_color = value;
                window.elementSdk.setConfig({ surface_color: value });
              }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
              }
            },
            {
              get: () => config.primary_action_color || defaultConfig.primary_action_color,
              set: (value) => {
                config.primary_action_color = value;
                window.elementSdk.setConfig({ primary_action_color: value });
              }
            },
            {
              get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
              set: (value) => {
                config.secondary_action_color = value;
                window.elementSdk.setConfig({ secondary_action_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["main_title", config.main_title || defaultConfig.main_title],
          ["project_1_category", config.project_1_category || defaultConfig.project_1_category],
          ["project_1_description", config.project_1_description || defaultConfig.project_1_description],
          ["project_2_category", config.project_2_category || defaultConfig.project_2_category],
          ["project_2_description", config.project_2_description || defaultConfig.project_2_description],
          ["project_3_category", config.project_3_category || defaultConfig.project_3_category],
          ["project_3_description", config.project_3_description || defaultConfig.project_3_description],
          ["project_4_category", config.project_4_category || defaultConfig.project_4_category],
          ["project_4_description", config.project_4_description || defaultConfig.project_4_description],
          ["project_5_category", config.project_5_category || defaultConfig.project_5_category],
          ["project_5_description", config.project_5_description || defaultConfig.project_5_description],
          ["button_text", config.button_text || defaultConfig.button_text]
        ])
      });
    }
