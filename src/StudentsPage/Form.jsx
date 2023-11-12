const Form = () => {
    return (
        <>
            <div className="contacts-form">
                <form action="https://formsubmit.co/vgan3v@gmail.com" method="POST">
                    <select name="Курс" id="person-type" required>
                        <option value="">--Аз съм--</option>
                        <option value="първи курс">Първи курс</option>
                        <option value="втори курс">Втори курс</option>
                        <option value="трети курс">Трети курс</option>
                        <option value="първи курс магистър">Първи курс магистър</option>
                        <option value="втори курс магистър">Втори курс магистър</option>
                        <option value="кандидат-сТУдент">Кандидат-сТУдент</option>
                    </select>
                    <input name="Име" type="text" placeholder="Име" required />
                    <input name="Имейл" type="email" placeholder="Имейл" required />
                    <textarea name="Съобщение" placeholder="Съобщение" required />
                    <button>Изпрати</button>
                </form>
            </div>
        </>
    );
};

export default Form;