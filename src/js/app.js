function supportAlert(){
    alert("Está função sera adicionada em breve!!!")
}
function onMobileMenu(){
    const onMobileIcons = document.querySelector(".mobileIcons")
    onMobileIcons.classList.remove('hidden')

const closeButton = document.querySelector(".closeButton")
closeButton.classList.remove('hidden')
}
function exitMobileMenu(){
    const exitMobileMenu = document.querySelector(".mobileIcons")
    exitMobileMenu.classList.add('hidden')

    const exitCloseButton = document.querySelector(".closeButton")
    exitCloseButton.classList.add('hidden')
}
function onSearch(){
    const homeScreen = document.querySelector(".homeScreen")
    homeScreen.classList.add('hidden')

    const searchScreen = document.querySelector(".searchScreen")
    searchScreen.classList.remove('hidden')
}

let apiBusinessOwner = [
    {
        urlImg:"https://bandalheira.cdn.magazord.com.br/img/2022/05/produto/6760/plc-0508-placa-decorativa-lamborghini-logo-2.jpg?ims=fit-in/1200x1200",
        name:"Lamborghini",
        companyName:"Volkswagen",
    },
    {
        urlImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHJ-I9i2NbWvtafOiE8OmStgseqzdYmK8jg&s",
        name:"Ferrari",
        companyName:"John Philip Jacob Elkann",
    },
    {
        urlImg:"https://static.vecteezy.com/system/resources/previews/020/500/572/non_2x/bugatti-brand-symbol-logo-name-white-design-french-cars-automobile-illustration-with-black-background-free-vector.jpg",
        name:"Bugatti",
        companyName:"Volkswagen",
    },
]
apiRender()
function apiRender(){
    const featuredBrands = document.querySelector(".featuredBrand")
    featuredBrands.innerHtml = ""

    for (let i in apiBusinessOwner) {
        featuredBrands.innerHTML += `
        
        <div class="brands">
          <img src="${apiBusinessOwner[i].urlImg}" alt="">
          <div class="information">
             <div class="name">${apiBusinessOwner[i].name}</div>
             <div class="companyName">${apiBusinessOwner[i].companyName}</div>
           </div>
        </div>
        ` 
    }
}

const apiCarro = [
    {
      id: 1,
      urlImg:
        "https://upload.wikimedia.org/wikipedia/commons/e/ee/Lamborghini_Urus_20180306_Genf_2018.jpg",
      cor: "amarelo",
      nome: "lamborghini urus",
      marca: "lamborghini",
      valor: 231000,
    },
    {
      id: 2,
      urlImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHBMI1jhJpZvoZZ7mTkeNc9LUqTuwx_k4Xgg&s",
      cor: "cinza",
      nome: "lamborghini veneno",
      marca: "lamborghini",
      valor: 241000,
    },
    {
      id: 3,
      urlImg:
        "https://uploads.automaistv.com.br/2018/08/Lamborghini-Aventador-SVJ-1.jpg",
      cor: "verde",
      nome: "lamborghini aventador",
      marca: "lamborghini",
      valor: 241000,
    },
    {
      id: 4,
      urlImg:
        "https://racingonline.com.br/wp-content/uploads/2023/04/lamborghini-revuelto-foto-2023.jpg",
      cor: "laranja",
      nome: "lamborghini revuelto",
      marca: "lamborghini",
      valor: 241000,
    },
    {
      id: 5,
      urlImg:
        "https://i.ytimg.com/vi/MLQ-c7fdWes/maxresdefault.jpg",
      cor: "cinza",
      nome: "lamborghini sesto elemento",
      marca: "lamborghini",
      valor: 241000,
    },
    {
      id: 6,
      urlImg:
        "https://miamiimports.com.br/wp-content/uploads/2024/03/FERRARI-SF90-STRADALE-FRENTE.png",
      cor: "vermelho",
      nome: "ferrari sf90",
      marca: "ferrari",
      valor: 351000,
    },
    {
      id: 7,
      urlImg:
        "https://t.ctcdn.com.br/7HfaDCJFKt_K0Sl60Z5gdHFczNU=/139x57:3997x2144/1200x675/smart/i829185.jpeg",
      cor: "azul",
      nome: "ferrari purosangue",
      marca: "ferrari",
      valor: 421000,
    },
    {
      id: 8,
      urlImg:
        "https://quatrorodas.abril.com.br/wp-content/uploads/2018/02/ferrari_488_pista.jpg?quality=70&strip=info&crop=1&resize=1080,565",
      cor: "vermelho",
      nome: "ferrari 488 pista",
      marca: "ferrari",
      valor: 422200,
    },
    {
      id: 9,
      urlImg:
        "https://forbes.com.br/wp-content/uploads/2017/03/carro-ferrari-rep-forbes-2-800x533.jpg",
      cor: "vermelho",
      nome: "ferrari 812 super rápido",
      marca: "ferrari",
      valor: 421000,
    },
    {
      id: 10,
      urlImg:
        "https://m.media-amazon.com/images/I/71XZ-Vlv5-L._AC_UF894,1000_QL80_.jpg",
      cor: "amarelo",
      nome: "ferrari testarossa",
      marca: "ferrari",
      valor: 421400,
    },
    {
      id: 11,
      urlImg:
        "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/15138_ACAAFF189FB11CF1.jpg?w=420&h=240&crop=1&quality=85",
      cor: "amarelo",
      nome: "ferrari f8 tributo",
      marca: "ferrari",
      valor: 421400,
    },
    {
      id: 12,
      urlImg:
        "https://porsche-vietnam.vn/wp-content/uploads/2020/10/911-tus-modelimage-sideshot-840x473.png",
      cor: "cinza",
      nome: "porschi 911 turbo s",
      marca: "porschi",
      valor: 531000,
    },
    {
      id: 13,
      urlImg:
        "https://s2-autoesporte.glbimg.com/fXbZUY3TQzxCvptlnYdkKkg9Q38=/0x0:1536x864/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2024/A/s/QdJbolRgKaoxCiE2NnVQ/porsche-911-gt3-2025-dinamica.jpg",
      cor: "branco",
      nome: "porschi 911 gt3",
      marca: "porschi",
      valor: 531000,
    },
    {
      id: 14,
      urlImg:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQ34To9OcH.4/v2/1200x800.jpg",
      cor: "cinza",
      nome: "bugatti tourbillon",
      marca: "bugatti",
      valor: 647000,
    },
    {
      id: 15,
      urlImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWUqiwHJzORfoO8ZcH87kzR4_VFRPzbb6n5w&s",
      cor: "preto",
      nome: "bugatti chiron",
      marca: "bugatti",
      valor: 631000,
    },
    {
      id: 16,
      urlImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/640px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg",
      cor: "preto",
      nome: "bugatti veyron",
      marca: "bugatti",
      valor: 631000,
    },
    {
      id: 17,
      urlImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPMDbNerfX5A-wvhrgdZ27vXC_vPrvH-R56Q&s",
      cor: "preto",
      nome: "bugatti divo",
      marca: "bugatti",
      valor: 631000,
    },
    {
      id: 18,
      urlImg:
        "https://quatrorodas.abril.com.br/wp-content/uploads/2022/12/https-__www.carscoops.com_wp-content_uploads_2022_12_Bugatti-Centodieci-Last-Example-2-1024x683-1-e1671646050637.jpg?quality=70&strip=info&crop=1&resize=1080,565",
      cor: "branco",
      nome: "bugatti centodieci",
      marca: "bugatti",
      valor: 631000,
    },
    {
      id: 19,
      urlImg:
        "https://www.agoramotors.com.br/wp-content/uploads/2024/09/dianteira-jaguar-f-pace-2025-preto.jpg",
      cor: "preto",
      nome: "jaguar f-pace",
      marca: "jaguar",
      valor: 231000,
    },
    {
      id: 20,
      urlImg:
        "https://s2-autoesporte.glbimg.com/HKFCMKoDrlm__8wu6ZFkyoIQfAg=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/t/c/nAMDGtRWyTRkCEy6JCOQ/2015-12-10-jag-new-xf-studio-image-240.jpg",
      cor: "branco",
      nome: "jaguar xf",
      marca: "jaguar",
      valor: 231000,
    },
  ];
  function fliterDataEmployee(){
  const lookFor = document.querySelector("#search").value 
  
  const employeeFilter = apiCarro.filter((i) => i.marca === lookFor)
  
  apiCarRender(employeeFilter)
  console.log(employeeFilter);
  
  }
  function apiCarRender(employeeFilter) {
    const listEmploy = document.querySelector(".searchRender");
    /* listEmploy.innerHTML = ""; */
  
    for (let i in apiCarro) {
      listEmploy.innerHTML += `
      
      <div class="car">
       <img src="${employeeFilter[i].urlImg}" alt="">
       <div class="name">Name: ${employeeFilter[i].nome}</div>
       <div class="mark">Mark: ${employeeFilter[i].marca}</div>
       <div class="color">Color: ${employeeFilter[i].cor}</div>
       <div class="value">Value: ${employeeFilter[i].valor}</div>
      </div>
      
      `;
    }
  }


  
  const myObserver = new IntersectionObserver((entries) => {
entries.forEach((entry)=>{
    if (entry.isIntersecting === true) {
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
        
    }
})
  })
  const elements = document.querySelectorAll(".animation")
  elements.forEach((element) => myObserver.observe(element))