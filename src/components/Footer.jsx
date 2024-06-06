import Chat from '../component/Chat';
import './Footer.css';

export default function Footer() {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box">
                    <i className="fas-fa-clock"></i>
                    <h3>locations</h3>
                    <a href="#">india</a>
                    <a href="#">japan</a>
                    <a href="#">russia</a>
                    <a href="#">USA</a>
                    <a href="./Locator">france</a>
                </div>

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#">home</a>
                    <a href="#">dishes</a>
                    <a href="#">about</a>
                    <a href="#">menu</a>
                    <a href="#">review</a>
                    <a href="./Order">order</a>
                    <a href="./Chat">Chat</a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#">+123-456-7890</a>
                    <a href="#">+111-222-3333</a>
                    <a href="#">abcd@gmail.com</a>
                    <a href="#">Chennai, india - 400104 </a>
                    <a href="https://t.me/Restro_GenieBot">Telegram</a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="#">facebook</a>
                    <a href="#">twitter</a>
                    <a href="#">instagram</a>
                    <a href="#">linkedin</a>
                </div>
            </div>
        </section>
    );
}
