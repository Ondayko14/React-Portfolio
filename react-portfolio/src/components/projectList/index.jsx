import React from 'react'

import photo from '../../imgs/ArtfulDodger.png';


function ProjectList() {
  return (
    <section class="work-wrapper">
                <div class="work-grid-wrapper">
                    
                    <div class="item1 background-img-placement placement">
                        <a class="item-links" href="https://guarded-caverns-91294.herokuapp.com/" target="_blank"></a>
                        <div class="text-squares text-squares-big">
                            <h4>Artful-Dodger</h4>
                            <p>VUE/Javascript/Node/Bootstrap</p>
                        </div>
                    </div>

                    <div class="item2 background-img-placement smaller-work placement">
                        <a class="item-links" href="https://ondayko14.github.io/run-buddy/" target="_blank"></a>
                        <div class="text-squares">
                            <h4>Run Buddy</h4>
                            <p>Html/Css</p>
                        </div>
                    </div>

                    <div class="item3 background-img-placement smaller-work placement">
                        <a class="item-links" href="https://ondayko14.github.io/coding-with-cocktails/" target="_blank"></a>
                        <div class="text-squares">
                            <h4>Coding With Cocktails!</h4>
                            <p>Javascript/Jquery/SASS</p>
                        </div>
                    </div>    

                    <div class="item4 background-img-placement smaller-work placement">
                        <a class="item-links" href="https://placeholder.com/" target="_blank"></a>
                        <div class="text-squares">
                            <h4>Example Project 3</h4>
                            <p>Html/Css</p>
                        </div>
                    </div>

                    <div class="item5 background-img-placement smaller-work placement">
                        <a class="item-links" href="https://placeholder.com/" target="_blank"></a>
                        <div class="text-squares">
                            <h4>Example Project 4</h4>
                            <p>Html/Css</p>
                        </div>
                    </div> 
                </div>
            </section>
  )
}

export default ProjectList;