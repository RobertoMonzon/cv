function addItem(prods) {

    const mainProds = document.getElementById("education-div");
    prods.forEach(prod => {
        mainProds.insertAdjacentHTML("beforeend",
            `
                    <!-- productos-->
                    <div class="col" style="margin-bottom: 1rem;">
                        <div class="card h-100 card__team cardedu">
                            <div class="shrink" style="text-align: center;">
                                <img src="${prod.image}"
                                    style="width: 200px; height: 150px; margin-top: 1rem;"
                                    class="img-fluid rounded" alt="${prod.title}">
                            </div>
                            <div class="card-body">
                                <div class="nombre__integrante">
                                    ${prod.title}
                                </div>
                                <br>
                                <div class="profesion__integrante">
                                ${prod.grade}
                            </div>
                                <div class="profesion__integrante" style="height: 7em;">
                                    ${prod.job}
                                </div>
                                <br>
                                <div class="profesion__integrante">
                                    ${prod.begin}
                                    <br>
                                    ${prod.end}
                                </div>
                            </div>
                            
                            <div style="text-align:right; margin-top:0;">
                            <button type="button" class="seemore-ed" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.id}">
                            Read more
                            </button>

                            </div>

                            <div class="modal fade" id="exampleModal${prod.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h6 class="modal-title">${prod.title}</h6>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                           ${prod.description}
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            `
        );

    });
}


prod1 = [

    { id: 1, title: "Generation México", begin: "Jun 2023", end:"Sep 2013",grade:"Bootcamp", job: "Java Full stack developer", 
    image: "/images/generation.jpg", 
    description: 

    `●TECHNICAL SKILLS●
    
    Introduction to the Role of the Developer
    Introduction to Computer Science Fundamentals of Web Development
    JavaScript for Web Development
    Introduction to Java Programming
    Introduction to Databases
    Introduction to Development
    Web with Java and Spring Boot
    
    ●PERSONAL SKILLS●
    In every job, there are key skills that will help you succeed. We will help you learn:
    Time management
    Communication
    Teamwork
    detail orientation
    
    ●PRACTICAL APPROACH●
    Final project
    Study cases
    Group and individual tutorials
    Presence of companies during the program
    
    ●EMPLOYABILITY●
    Self-knowledge and development of digital identity
    Job search tools and planning
    Interview and CV preparation workshops
    Guidance and career monitoring`},

    { id: 2, title: "University of Lille", begin: "Oct 2020",end: "Dec 2022", job: "ms",grade:"M.s", job: "Medical technologies and healthcare business", 
    image: "/images/ufr3s.jpg", 
    description: 
    `EMMaH is a two-year joint Master degree covering a rich multidisciplinary curriculum, from biomedical technologies and clinical research to healthcare business. The healthcare diagnostics sector is challenged by novel disruptive technologies and healthcare practices toward a patient-centred vision. This fast-moving sector, boosted by innovation and demographic evolutions, must confront changes in the healthcare and business landscapes.

    🇫🇷 🇩🇪 🇵🇹 The European Master in Medical Technology and Healthcare Business EMMaH is a joint programme awarded by four HEIs: Université de Lille in France (ULille), Hochschule für Angewandte Wissenschaften Hamburg in Germany (HAW), Instituto Politécnico Do Porto in Portugal (IPP) and Taipei Medical University in Taiwan (TMU).

    EMMaH master is a multidisciplinary master, focusing on the study of medical technologies through various fields of expertise: biomedical engineering, healthcare and business. MedTech industry experiences rapid innovation cycles and employs a growing number of healthcare professionals. To respond to these challenges, EMMaH prepares students to be specialised in the development, regulation, improvement and business management of technical and organisational healthcare solutions.
    EMMaH is a professionalising master that allows students to work in an international environment by combining theoretical analysis and concrete case studies in partnership with various health organisations.
    Graduate are awarded a joint diploma co-signed by the EU partners, the MSc. from TMU (depending on the student’s choice for the Master thesis) and digital graduation certificates.`},

    { id: 3, title: "Bicentennial University", begin: "Sep 2014", end: "Dec 2017",grade:"B.s", job: "Biomedical engineering", 
    image: "/images/upblog.jpg", 
    description: 
    `Graduates will provide and supervise specialized technical support services to the health sector, using the applicable regulations, to maintain the security and reliability of its technology and infrastructure.
    Graduates will coordinate biomedical engineering departments, carrying out management procedures for medical equipment and personnel, to contribute to the quality of health services.
    Graduates will carry out entrepreneurship projects and commercialization of equipment, systems and services through the analysis of requirements and the evaluation of health technologies, to promote the development of the medical industry.
    Graduates will develop and implement technological solutions through the analysis of opportunity areas and the application of principles and techniques of engineering and medicine, to contribute to the well-being of society.
    Graduates will specialize in areas of research, innovation, training and/or consulting, considering current and future problems in biomedical engineering and related issues, to contribute to the development of science and technology in the country.`}
    
];

addItem(prod1);