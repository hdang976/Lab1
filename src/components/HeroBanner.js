export function HeroBanner() {
    return (
        <div id="banner" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/banner1.jpg"></img>
                </div>

                <div className="carousel-item">
                    <img src="/images/banner2.jpg"></img>
                </div>

                <div className="carousel-item">
                    <img src="/images/banner3.jpg"></img>
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#banner"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#banner"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon"></span>
            </button>

            <div className="carousel-caption">
            <h2 style={{ textAlign: 'center', padding: '20px', color: 'black' }}>SUMMER SALE UP TO 50%</h2>
            <p style={{ textAlign: 'center', color: 'black' }}>Summer sale up to 50%</p>
            </div>
        </div>
    );
}