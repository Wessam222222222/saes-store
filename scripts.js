// بيانات السيرفرات
const servers = [
    {
        name: "GLENDALE ΜΕ",
        image: "https://play-lh.googleusercontent.com/YAWv6qCsri2Ff8DAOanjKSNRrHZYLnD6Lc7pHtCmzEq-S7RGsyO5abdAcXYA9JOUNH0=w5120-h2880-rw",
        description: "السيرفر الرسمي لليوتيوبر Boydairy مع أحداث حصرية ومحتوى مميز. انضم الآن لتكون جزءاً من هذه التجربة الفريدة!",
        players: "500/500",
        instagramLink: "https://ig.me/j/AbaQGvII1V6B6E5i/",
        online: true,
        isYoutuber: true,
        youtubeChannel: "https://youtube.com/boydairy",
        topServer: true
    },
    {
        name: "SOLANO ME",
        image: "https://play-lh.googleusercontent.com/COhdCDc4ooWHCXlZZH1y_EP9-83HYbOmgjKHgYky8oyvZ4Qiocrhyzs1ZYc1z5G009-7=w1052-h592-rw",
        description: "السيرفر الرسمي للعبة One State RP مع أفضل الأداء وأحدث التحديثات",
        players: "1200/1500",
        instagramLink: "https://ig.me/j/AbYmZ0HUmyUJ-HPB/",
        online: true,
        isYoutuber: false
    },
    {
        name: "سيرفر الأبطال",
        image: "https://play-lh.googleusercontent.com/-jqzDw2Xw_uQkWcVs0nNRxomlGGu-rmQGLRM-b90ujx6W9HAW4DFi6j4TqPw-zxTSe8=w1052-h592-rw",
        description: "سيرفر مخصص للمحترفين مع تحديات ومهام حصرية",
        players: "850/1000",
        instagramLink: "https://instagram.com/onestate_heroes",
        online: true,
        isYoutuber: false
    },
    {
        name: "سيرفر المبتدئين",
        image: "https://play-lh.googleusercontent.com/zu7ebpbjWBfhB-xkNEJ5gQk7-3JqhLXezXQo42eGXVuB8gaUNeHgmIWdeFCFHPPUSA=w1052-h592-rw",
        description: "مكان مثالي للاعبين الجدد لتعلم أساسيات اللعبة",
        players: "600/800",
        instagramLink: "https://instagram.com/onestate_newbies",
        online: true,
        isYoutuber: false
    },
    {
        name: "سيرفر الأدوار المتقدمة",
        image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a977ea67-b4b1-4d91-92a7-d6a4a6e27294/3716157514/one-state-rp-mmorpg-sandbox-screenshot.png",
        description: "تجربة لعب أدوار متقدمة مع أنظمة محسنة للتفاعل",
        players: "950/1200",
        instagramLink: "https://instagram.com/onestate_advanced",
        online: true,
        isYoutuber: false
    },
    {
        name: "سيرفر الجيش والشرطة",
        image: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/a977ea67-b4b1-4d91-92a7-d6a4a6e27294/413429009/one-state-rp-mmorpg-sandbox-screenshot.png",
        description: "سيرفر مخصص لأدوار الجيش والشرطة مع أنظمة خاصة",
        players: "700/800",
        instagramLink: "https://instagram.com/onestate_police",
        online: true,
        isYoutuber: false
    }
];

// بيانات الأدوار المعدلة حسب الطلب
const roles = [
    {
        name: "شرطي",
        icon: "fa-shield-alt",
        description: "حافظ على الأمن والنظام في المدينة، قم باعتقال المجرمين وتطبيق القانون.",
        message: "أريد الانضمام إلى سيرفر One State RP كشرطي. أنا ملتزم بتطبيق القانون والحفاظ على الأمن في المدينة."
    },
    {
        name: "جيش",
        icon: "fa-helmet-battle",
        description: "كن جزءاً من القوات المسلحة وقم بحماية المدينة من التهديدات الخارجية.",
        message: "أريد الانضمام إلى سيرفر One State RP كعضو في الجيش. أنا مستعد لحماية المدينة والدفاع عنها ضد أي تهديدات."
    },
    {
        name: "أدمن",
        icon: "fa-user-crown",
        description: "ساعد في إدارة السيرفر وضبط النظام بين اللاعبين.",
        message: "أريد الانضمام إلى سيرفر One State RP كأدمن. لدي خبرة في إدارة السيرفرات وأريد المساعدة في الحفاظ على النظام."
    },
    {
        name: "مواطن عادي",
        icon: "fa-user",
        description: "عش حياة عادية في المدينة وابنِ مستقبلك الخاص.",
        message: "أريد الانضمام إلى سيرفر One State RP كمواطن عادي. أريد بناء حياة افتراضية ممتعة في المدينة."
    },
    {
        name: "طبيب",
        icon: "fa-user-md",
        description: "قدم الرعاية الطبية للمواطنين وأنقذ الأرواح في حالات الطوارئ.",
        message: "أريد الانضمام إلى سيرفر One State RP كطبيب. لدي خبرة في تقديم الرعاية الطبية وإنقاذ الأرواح."
    },
    {
        name: "عضو عصابه",
        icon: "fa-mask",
        description: "انضم إلى عالم الجريمة المنظم وكن جزءاً من عصابة سرية.",
        message: "أريد الانضمام إلى سيرفر One State RP كعضو في عصابة. أريد استكشاف عالم الجريمة المنظم في المدينة."
    },
    {
        name: "مساعد مونتاج",
        icon: "fa-video",
        description: "ساعد في تحرير مقاطع الفيديو والمحتوى لليوتيوب.",
        message: "أريد الانضمام إلى سيرفر One State RP كمساعد مونتاج. لدي مهارات في تحرير الفيديو وأريد المساعدة في إنتاج محتوى لليوتيوب."
    }
];

// متغيرات التطبيق
let selectedServer = null;
let selectedRole = null;
let currentMessage = "";

// عناصر DOM
const verificationModal = document.getElementById('verificationModal');
const verifyButton = document.getElementById('verifyButton');
const mainContent = document.getElementById('mainContent');
const serversContainer = document.getElementById('serversContainer');
const rolesModal = document.getElementById('rolesModal');
const rolesContainer = document.getElementById('rolesContainer');
const rolesModalTitle = document.getElementById('rolesModalTitle');
const rolesModalSubtitle = document.getElementById('rolesModalSubtitle');
const confirmRoleBtn = document.getElementById('confirmRoleBtn');
const cancelRoleBtn = document.getElementById('cancelRoleBtn');
const selectionMessage = document.getElementById('selectionMessage');
const messageText = document.getElementById('messageText');
const messageModal = document.getElementById('messageModal');
const messageContent = document.getElementById('messageContent');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const copyMessageBtn = document.getElementById('copyMessageBtn');
const closeMessageBtn = document.getElementById('closeMessageBtn');

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
    // عرض السيرفرات
    renderServers();
    
    // أحداث النقر
    verifyButton.addEventListener('click', hideVerificationModal);
    confirmRoleBtn.addEventListener('click', confirmRoleSelection);
    cancelRoleBtn.addEventListener('click', cancelRoleSelection);
    sendMessageBtn.addEventListener('click', sendMessage);
    copyMessageBtn.addEventListener('click', copyMessage);
    closeMessageBtn.addEventListener('click', hideMessageModal);
});

// عرض السيرفرات
function renderServers() {
    serversContainer.innerHTML = '';
    
    servers.forEach((server, index) => {
        const serverCard = document.createElement('div');
        serverCard.className = `server-card ${server.isYoutuber ? 'youtuber-server' : ''} ${server.topServer ? 'top-server' : ''}`;
        serverCard.style.setProperty('--order', index);
        
        let badge = '';
        if (server.isYoutuber) {
            badge = `<div class="youtuber-badge"><i class="fab fa-youtube"></i> سيرفر اليوتيوبر</div>`;
        }
        
        if (server.topServer) {
            badge += `<div class="top-player-count"><i class="fas fa-crown"></i> الأكثر نشاطاً</div>`;
        }
        
        serverCard.innerHTML = `
            <div class="server-header">
                ${badge}
                <img src="${server.image}" alt="${server.name}">
                <div class="server-name">${server.name}</div>
            </div>
            <div class="server-info">
                <p class="server-description">${server.description}</p>
                <div class="server-stats">
                    <span><i class="fas fa-users"></i> اللاعبون: ${server.players}</span>
                    <span class="${server.online ? 'online' : 'offline'}">
                        <i class="fas fa-circle"></i> ${server.online ? 'متصل' : 'غير متصل'}
                    </span>
                </div>
                <button class="server-button" data-server-index="${index}" ${!server.online ? 'disabled' : ''}>
                    ${server.online ? 'اختر هذا السيرفر' : 'غير متاح حالياً'}
                </button>
            </div>
        `;
        
        serversContainer.appendChild(serverCard);
        
        // حدث اختيار السيرفر
        const selectButton = serverCard.querySelector('.server-button');
        selectButton.addEventListener('click', function() {
            selectServer(index);
        });
    });
}

// عرض الأدوار في النافذة المنبثقة
function renderRolesInModal() {
    rolesContainer.innerHTML = '';
    
    roles.forEach((role, index) => {
        const roleCard = document.createElement('div');
        roleCard.className = 'role-card';
        roleCard.style.setProperty('--order', index);
        roleCard.innerHTML = `
            <div class="role-icon">
                <i class="fas ${role.icon}"></i>
            </div>
            <h3 class="role-name">${role.name}</h3>
            <p class="role-description">${role.description}</p>
        `;
        
        roleCard.addEventListener('click', function() {
            // إلغاء تحديد الأدوار الأخرى
            document.querySelectorAll('.role-card').forEach(card => {
                card.classList.remove('selected');
            });
            
            // تحديد الدور الجديد
            roleCard.classList.add('selected');
            selectedRole = index;
        });
        
        rolesContainer.appendChild(roleCard);
    });
}

// اختيار السيرفر
function selectServer(index) {
    selectedServer = index;
    const server = servers[index];
    
    // تحديث عنوان نافذة الأدوار
    rolesModalTitle.textContent = `اختر دورك في سيرفر ${server.name}`;
    rolesModalSubtitle.textContent =