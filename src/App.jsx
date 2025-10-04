import sidepic from "./2110_character/img/sidepic.jpg";
import profilepic from "./2110_character/img/jimmy.jpg";
import name from "./2110_character/img/name.jpg";
function App() {
  return (
    <>
      <main className="tm-container masonry">
        <div
          className="item tm-bg-white tm-block tm-block-left"
          data-desktop-seq-no={1}
          data-mobile-seq-no={1}
        >
          <header>
            <h2 className="name" >Jimmy N. Lumaad</h2>
          </header>
          <p className="tm-hero-text">
            “A student aiming to be a great professional and is 
            passionate at accumulating knowledge regarding computer programming."

          </p>
          <header className="tm-block-brand">
            <div className="tm-bg-primary-dark tm-text-white tm-block-brand-inner">
              <i className="fas fa-braille fa-3x" />
              <h1 className="tm-brand-name">Character</h1>
            </div>
          </header>
        </div>
        <div className="item" data-desktop-seq-no={2} data-mobile-seq-no={4}>
          <img alt="Image" className="tm-img-left" src={sidepic} />
        </div>
        
        <div
          className="item tm-bg-secondary tm-text-white tm-block tm-block-wider tm-block-pad tm-block-left-2"
          data-desktop-seq-no={3}
          data-mobile-seq-no={5}
        >
          <i className="fas fa-award fa-4x tm-block-icon" />
          <header>
              <h2 className="tm-text-uppercase"> Educational Acheivements:</h2>
          </header>
          <h4 className="tm-text-uppercase"> 2015 - 2025</h4>
          <ul>
              <li>RECEIVED A DSR LOYALTY AWARD
              CERTIFICATE.</li>
              <li>RECEIVED “WITH HONOR”
              CERTIFICATES IN SOME YEARS.</li>
              <li>BECAME A "DEAN'S LISTER" IN COLLEGE</li>
              
          </ul>
          <p className="tm-mt tm-mb-small">
            These are some of my educational achievements that I am proud of.
          </p>
          {/* */}
        </div>
        <div
          className="tm-footer"
          id="tmFooter"
          data-desktop-seq-no={5}
          data-mobile-seq-no={9}
        >
        </div>
        <div className="item" data-desktop-seq-no={6} data-mobile-seq-no={2}>
          <img src={profilepic} alt="Image" />
        </div>
        <div
          className="item tm-block-right"
          data-desktop-seq-no={7}
          data-mobile-seq-no={3}
        >
          <div className="tm-block-right-inner tm-bg-primary-light tm-text-white tm-block tm-block-wider tm-block-pad">
            <header>
              <h2 className="tm-text-uppercase">Hobbies:</h2>
            </header>
            <ul>
              <li>Playing Chess</li>
              <li>Reading Books</li>
              <li>Traveling</li>
              <li>Listening to music</li>
              <li>Watching Movies</li>
              <li>Playing Video Games</li>
            </ul>
            <header>
              <h2 className="tm-text-uppercase">Skills:</h2>
            </header>
            <ul>
              <li>Basic C++ programming</li>
              <li>Basic HTML programming</li>
              <li>Basic PHP programming</li>
              <li>Basic Python programming</li>
              <li>Basic Javascript programming</li>
              <li>Basic SQL programming</li>
              <li>Basic C# programming</li>
              <li>Basic English, Tagalog, and Bisaya speaking</li>
            </ul>
            <p className="tm-mt tm-mb-small">
              These are my hobbies and skills that I have developed over the years.
            </p>
            {/* */}
          </div>
        </div>
        <div className="item shrink" data-desktop-seq-no={8} data-mobile-seq-no={6}>
          <img src={name} alt="Image" />
        </div>
        <div>
          <div className="tm-form-section-tag">
            <div className="tm-bg-secondary tm-text-white tm-block-pad tm-form-section-tag-inner">
              <header>
                <h2>Motto:</h2>
              </header>
              <p>
                "Acheiving greatness is what people dream of, we should strive for it instead of just dreaming about it."
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* https://jquery.com/download/ */}
    </>

  )
}

export default App
