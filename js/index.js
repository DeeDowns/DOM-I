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

const serviceLink = navLinks[0].textContent = 'Services'
const productLink = navLinks[1].textContent = 'Product'
const visionLink = navLinks[2].textContent = 'Vision'
const featuresLink = navLinks[3].textContent = 'Features'
const aboutLink = navLinks[4].textContent = 'About'
const contactLink = navLinks[5].textContent = 'Contact'


//Logo 
const logoImg = document.querySelector('#logo-img');
console.log(logoImg)
logoImg.src = 'img/logo.png'


//Header Image
const headerImg = document.querySelector('#cta-img');
console.log(headerImg)
headerImg.src = 'img/header-img.png'


//Header h1
const headerTitle = document.querySelector('.cta-text h1')
console.log(headerTitle)
headerTitle.innerHTML = 'DOM<br> Is<br> Awesome'


//Header button
const buttonText = document.querySelector('.cta-text button')
console.log(buttonText);
buttonText.textContent = 'Get Started'


//Text-content h4's
const fourHeadings = document.querySelectorAll('.text-content h4');
console.log(fourHeadings)

const features = fourHeadings[0].textContent = 'Features'
const about = fourHeadings[1].textContent = 'About'
const services = fourHeadings[2].textContent = 'Services'
const product = fourHeadings[3].textContent = 'Product'
const vision = fourHeadings[4].textContent = 'Vision'


//Text-content p's
const textContentPs = document.querySelectorAll('.text-content p')
console.log(textContentPs)

const featuresTextContent = textContentPs[0].textContent = `Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const aboutTextContent = textContentPs[1].textContent = `About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const servicestTextContent = textContentPs[2].textContent = `Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const productTextContent = textContentPs[3].textContent = `Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`

const visionTextContent = textContentPs[4].textContent = `Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`


//main-content middle-img
const middleImg = document.querySelector('#middle-img');
console.log(middleImg);
middleImg.src = 'img/mid-page-accent.jpg'


//contact h4
const contactHeading = document.querySelector('.contact h4')
console.log(contactHeading)
contactHeading.textContent = 'Contact';

//contact p
const contactInfo = document.querySelectorAll('.contact p')
console.log(contactInfo)
const contactAddress = contactInfo[0].innerHTML = '123 Way 456 Street<br> Somewhere, USA'
const contactNumber = contactInfo[1].textContent = '1 (888) 888-8888'
const contactEmail = contactInfo[2].textContent = 'sales@greatidea.io'