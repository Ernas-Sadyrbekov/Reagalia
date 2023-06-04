import React, {
    useRef
} from "react";
import './Form.css';
import emailjs from "emailjs-com";

const FormContact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        // e.preventDefault();
        // const formData = new FormData(e.target);
        // // api.login(formData.get('email'), formData.get('phone'), formData.get('email'), formData.get('address'), formData.get('comment'));
        // console.log(formData.get('name'), formData.get('phone'), formData.get('email'), formData.get('address'), formData.get('comment'));
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_xchfztq', form.current, 'pylx-Dm8SX08NFNUM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className='form-buy'>
            <div>
                <p className='fs62'>Оформление заказа онлайн</p>
                <hr className='line-hr'/>
            </div>
            <form  ref={form} onSubmit={handleSubmit}>
                <div className="form-buy__row">
                    <div>
                        <label htmlFor="name">Ваше имя: *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Телефон: *</label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                        />
                    </div>
                </div>
                <div className="form-buy__row">
                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Адрес:</label>
                        <input
                            type="address"
                            id="address"
                            name="address"
                        />
                    </div>
                </div>
                <div className='form-buy__row form-buy__row-comment'>
                    <div>
                        <label htmlFor="comment">Комментарии к заказу:</label>
                        <input
                            type="comment"
                            id="comment"
                            name="comment"
                        />
                    </div><br/>
                </div>
                <div className="slider__main_btn">
                    <button>
                        <a tabIndex="0">
                            <span>Оформить заказ</span>
                            <p></p>
                        </a>
                    </button>
                </div>
            </form>
        </div>
    );
}


export default FormContact;