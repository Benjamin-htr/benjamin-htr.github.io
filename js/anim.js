function initSign() {
    if (document.querySelector(".sign-container")) {
        /* window.location.reload(); */
        reset();
        setup();
        draw();
        windowResized();
        console.log("sign-container exist !");
    }
}

var scripList = [/* "./js/libs/matter.min.js",
                "js/libs/render.js",
                "js/libs/p5.min.js", */
                "./js/chains2.js"]

function reloadwindow() {
    value = document.querySelector("main").getAttribute("data-barba-namespace");
    console.log("value reload : ", value);
    if (value === "home" || value === "home-en") {
        window.location.reload();
    }
}
function reloadScript(next) {
    let script;
    let body = document.querySelector("body");
    for (let i = 0; i < scripList.length; i++) {
        script = document.createElement('script');
        script.src = scripList[i];
        /* next.container.appendChild(script); */
        body.appendChild(script);

    };
};
function clearScript(current) {
    var scripts = current.container.querySelectorAll("script");
    console.log("scripts : ",scripts);
    scripts.forEach(function(item) {
        item.remove();
    });
};



function contentAnimation() {
	console.log('coucou')
  var tl = gsap.timeline();
  tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.2, delay: 0.1 });

}

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.set(".load-container", {display : "initial"});
    tl.set(".loading-screen", { top: "-100%" });
    tl.to(".loading-screen", {
        duration: 1.2,
        height: "100%",
        top: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        height: "100%",
        top: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".load-container", {display : "none"});
    tl.call(reloadwindow);
    tl.call(updateline);
    tl.call( refreshLink);
    
    
    
    
	
}

barba.init({
    
    requestError: (trigger, action, url, response) => {
      // go to a custom 404 page if the user click on a link that return a 404 response status
      if (response.status && response.status === 404) {
        console.log('error')
      }

      // prevent Barba from redirecting the user to the requested URL
      // this is equivalent to e.preventDefault() in this context
      return false;
    },
    /* debug: true,
	logLevel: 'error', */
	sync: true,
	debug: true,
    transitions: [
    {name: 'opacity-transition',
    async leave(data) {
		const done = this.async();
        pageTransition();
        await delay(1000);
        done();

        
     },
    async enter(data) {
		contentAnimation();
        console.log("enter",data.next.container);
        /* updateline(); */
       
        

    }   
  }],
  
  views: [
    {
        namespace: 'home',
        afterEnter(data) {
            console.log("sz-home");
            /* timer('.fr'); */
           
        },
    
    },
    {
        namespace: 'home-en',
        afterEnter(data) {
            console.log("sz-home-en");
            /* timer('.en'); */
        },
    },
    {
        namespace: 'me',
        afterEnter(data) {
            timer('me');
        },
    },
    {
        namespace: 'me-en',
        afterEnter(data) {
            timer('me-en');
        },
    },
    {
        namespace: 'skills',
        afterEnter(data) {
            timer('skills');
        },
    },
    {
        namespace: 'skills-en',
        afterEnter(data) {
            timer('skills-en');
        },
    }

]
});
/* barba.hooks.afterEnter((data) => {
    updateline();
    
}); */
barba.hooks.after(() => {
    gtag('config', 'G-YWQX210488', {'page_path': window.location.pathname});

  });
console.log('barba');




function refreshLink() {
    var value = document.querySelector("main").getAttribute("data-barba-namespace");
    /* console.log("value :", value); */

    var en = document.querySelector(".languages_ch a:nth-child(1)");
    /* console.log("en : ",en); */
    var fr = document.querySelector(".languages_ch a:nth-child(2)");
    /* console.log("fr : ",fr); */

    var home = document.querySelector(".pages_ch a:nth-child(1)");
    /* console.log("home : ",home); */
    var me = document.querySelector(".pages_ch .box:nth-child(2) a");
    /* console.log("me : ",me); */
    var skills = document.querySelector(".pages_ch .box:nth-child(3) a");
    var projects = document.querySelector(".pages_ch .box:nth-child(4) a");
    var contact = document.querySelector(".pages_ch .box:nth-child(5) a");

    if (value === "home") {
        en.href="./index.en.html";
        fr.href="./index.html";

        home.href="./index.html";
        me.href="./pages/me/me.fr.html";
        skills.href="./pages/skills/skills.fr.html";
        projects.href="./pages/projects/projects.fr.html";
        contact.href="./pages/contact/contact.fr.html";

    }
    else if (value === "home-en") {
        en.href="./index.en.html";
        fr.href="./index.html";

        home.href="./index.en.html";
        me.href="./pages/me/me.en.html";
        skills.href="./pages/skills/skills.en.html";
        projects.href="./pages/projects/projects.en.html";
        contact.href="./pages/contact/contact.en.html";
    }
    else if (value === "me") {
        en.href="./me.en.html";
        fr.href="./me.fr.html";

        home.href="../../index.html";
        me.href="../../pages/me/me.fr.html";
        skills.href="../../pages/skills/skills.fr.html";
        projects.href="../../pages/projects/projects.fr.html";
        contact.href="../../pages/contact/contact.fr.html";

    }
    else if (value === "me-en") {
        en.href="./me.en.html";
        fr.href="./me.fr.html";

        home.href="../../index.en.html";
        me.href="../../pages/me/me.en.html";
        skills.href="../../pages/skills/skills.en.html";
        projects.href="../../pages/projects/projects.en.html";
        contact.href="../../pages/contact/contact.en.html";

    }

    else if (value === "skills") {
        en.href="./skills.en.html";
        fr.href="./skills.fr.html";

        home.href="../../index.html";
        me.href="../../pages/me/me.fr.html";
        skills.href="../../pages/skills/skills.fr.html";
        projects.href="../../pages/projects/projects.fr.html";
        contact.href="../../pages/contact/contact.fr.html";

    }
    else if (value === "skills-en") {
        en.href="./skills.en.html";
        fr.href="./skills.fr.html";

        home.href="../../index.en.html";
        me.href="../../pages/me/me.en.html";
        skills.href="../../pages/skills/skills.en.html";
        projects.href="../../pages/projects/projects.en.html";
        contact.href="../../pages/contact/contact.en.html";

    }
    else if (value === "projects") {
        en.href="./projects.en.html";
        fr.href="./projects.fr.html";

        home.href="../../index.html";
        me.href="../../pages/me/me.fr.html";
        skills.href="../../pages/skills/skills.fr.html";
        projects.href="../../pages/projects/projects.fr.html";
        contact.href="../../pages/contact/contact.fr.html";

    }
    else if (value === "projects-en") {
        en.href="./projects.en.html";
        fr.href="./projects.fr.html";

        home.href="../../index.en.html";
        me.href="../../pages/me/me.en.html";
        skills.href="../../pages/skills/skills.en.html";
        projects.href="../../pages/projects/projects.en.html";
        contact.href="../../pages/contact/contact.en.html";

    }
    else if (value === "contact") {
        en.href="./contact.en.html";
        fr.href="./contact.fr.html";

        home.href="../../index.html";
        me.href="../../pages/me/me.fr.html";
        skills.href="../../pages/skills/skills.fr.html";
        projects.href="../../pages/projects/projects.fr.html";
        contact.href="../../pages/contact/contact.fr.html";

    }
    else if (value === "contact-en") {
        en.href="./contact.en.html";
        fr.href="./contact.fr.html";

        home.href="../../index.en.html";
        me.href="../../pages/me/me.en.html";
        skills.href="../../pages/skills/skills.en.html";
        projects.href="../../pages/projects/projects.en.html";
        contact.href="../../pages/contact/contact.en.html";

    }
    

}
