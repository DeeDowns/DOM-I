const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//Nav Links
const navLinks = document.querySelectorAll('nav a');
console.log(navLinks)

const serviceLink = navLinks[0].textContent = siteContent['nav']['nav-item-1']
const productLink = navLinks[1].textContent = siteContent['nav']['nav-item-2']
const visionLink = navLinks[2].textContent =  siteContent['nav']['nav-item-3']
const featuresLink = navLinks[3].textContent =  siteContent['nav']['nav-item-4']
const aboutLink = navLinks[4].textContent =  siteContent['nav']['nav-item-5']
const contactLink = navLinks[5].textContent =  siteContent['nav']['nav-item-6']


//Logo 
const logoImg = document.querySelector('#logo-img');
console.log(logoImg)
logoImg.src =  siteContent['nav']['img-src']


//Header Image
const headerImg = document.querySelector('#cta-img');
console.log(headerImg)
headerImg.src = siteContent['cta']['img-src']


//Header h1
const headerTitle = document.querySelector('.cta-text h1')
console.log(headerTitle)
headerTitle.innerHTML = 'DOM<br> Is<br> Awesome'


//Header button
const buttonText = document.querySelector('.cta-text button')
console.log(buttonText);
buttonText.textContent = siteContent['cta']['button']


//Text-content h4's
const fourHeadings = document.querySelectorAll('.text-content h4');
console.log(fourHeadings)

const features = fourHeadings[0].textContent = siteContent['main-content']['features-h4']
const about = fourHeadings[1].textContent = siteContent['main-content']['about-h4']
const services = fourHeadings[2].textContent = siteContent['main-content']['about-h4']
const product = fourHeadings[3].textContent = siteContent['main-content']['product-h4']
const vision = fourHeadings[4].textContent = siteContent['main-content']['vision-h4']


//Text-content p's
const textContentPs = document.querySelectorAll('.text-content p')
console.log(textContentPs)

const featuresTextContent = textContentPs[0].textContent = siteContent['main-content']['features-content']

const aboutTextContent = textContentPs[1].textContent = siteContent['main-content']['about-content']

const servicestTextContent = textContentPs[2].textContent = siteContent['main-content']['services-content']

const productTextContent = textContentPs[3].textContent = siteContent['main-content']['product-content']

const visionTextContent = textContentPs[4].textContent = siteContent['main-content']['vision-content']


//main-content middle-img
const middleImg = document.querySelector('#middle-img');
console.log(middleImg);
middleImg.src = siteContent['main-content']['middle-img-src']


//contact h4
const contactHeading = document.querySelector('.contact h4')
console.log(contactHeading)
contactHeading.textContent = siteContent['contact']['contact-h4']

//contact p
const contactInfo = document.querySelectorAll('.contact p')
console.log(contactInfo)
const contactAddress = contactInfo[0].innerHTML = siteContent['contact']['address']
const contactNumber = contactInfo[1].textContent = siteContent['contact']['phone']
const contactEmail = contactInfo[2].textContent = siteContent['contact']['email']

//footer p
const footerP = document.querySelector('footer p')
console.log(footerP)
footerP.textContent =  siteContent['footer']['copyright']

//nav links text to green
navLinks.forEach(item => item.style.color = 'green')


//adding 2 new items to nav
const newNavLinkOne = document.createElement('a')
const newNavLinkTwo = document.createElement('a')
newNavLinkOne.textContent = 'hiiii'
newNavLinkTwo.textContent = 'byeee'
newNavLinkOne.href = '#'
newNavLinkTwo.href = '#'
const nav = document.querySelector('nav')
console.log(nav)
nav.prepend(newNavLinkOne)
nav.appendChild(newNavLinkTwo)
console.log(newNavLinkOne)
console.log(newNavLinkTwo)

