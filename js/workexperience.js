function addItem(prods) {

    const mainProds = document.getElementById("work-experience");
    prods.forEach(prod => {
        mainProds.insertAdjacentHTML("beforeend",
            `
                    <!-- productos-->
                    <div class="col" style="margin-bottom: 1rem;">
                        <div class="card card__team h-100">
                            <div class="shrink" style="text-align: center;">
                                <img src="${prod.image}"
                                    style="width: 150px; height: 150px; margin-top: 1rem;"
                                    class="img-fluid rounded" alt="${prod.title}">
                            </div>
                            <div class="card-body">
                                <div class="nombre__integrante">
                                    ${prod.title}
                                </div>
                                <br>
                                <div class="profesion__integrante">
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
                            <button type="button" class="seemore" data-bs-toggle="modal" data-bs-target="#exampleModal${prod.id}">
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

    { id: 1, title: "Generation Mx", begin: "Jun 2023", end:"Present", job: "Java Full stack developer Jr.", 
    image: "/images/generationlogo.jpg", 
    description: 
    `●Developed a web application, e-commerce type, together with a team of programmers\n
    ●Worked under the agile SCRUM methodology\n
    ●Contributed to back-end development using Java, Spring Boot and MySQL\n
    ●Contributed to UI design and front-end development using JavaScript, HTML and CSS`},

    { id: 2, title: "Independent", begin: "Feb 2023",end: "Jun 2023", job: "Field Service Engineer", 
    image: "/images/milogo.png", 
    description: 
    `●Repaired medical equipment such vital signs monitors and defibrillators of local private clinics\n
    ●Buy spare parts needed to repair medical devices\n
    ●Developed the maintenance of medical equipment according to the procedure sheet`},

    { id: 3, title: "Biossmann", begin: "Abr 2019", end: "Dec 2019", job: "Field Service Engineer", 
    image: "/images/biossmannlogo.jpg", 
    description: 
    `●Explained to doctors and nurses about the correct functioning of medical devices\n
    ●Repaired medical equipment such as anesthesia machines, vital signs monitors and defibrillators\n
    ●Developed the maintenance of medical equipment according to the procedure sheet\n
    ●Installed medical equipment in different areas of the hospital`},

    { id: 4, title: "Medikal Muneris", begin: "Aug 2017",end: "Aug 2018", job: "Clinical application specialist", 
    image: "/images/medikallogo.jpg", 
    description: 
    `●Installed monitoring centers for the intensive care unit of different hospitals of the Mexican Social Security Institute\n
    ●Explained to doctors and nurses the proper functioning of vital signs monitors of the brand Philips\n
    ●Supported the preventive and corrective maintenance of different medical equipment`},

    { id: 5, title: "Hospital of Irapuato", begin: "May 2017", end: "Aug 2017", job: "Biomedical engineer intern", 
    image: "/images/secretarialogo.jpg", 
    description: 
    `●Explained to doctors and nurses the correct operation of medical devices\n
    ●Translated user manuals for the good interpretation for the technicians\n
    ●Wrote user manuals for medical devices that did not have one\n
    ●Designed checklists for preventive maintenance that did not have a guarantee\n
    ●Developed preventive and corrective maintenance for medical devices without warranty`}


    



    
];

addItem(prod1);