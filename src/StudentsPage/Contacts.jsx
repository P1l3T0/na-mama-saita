export function Contatcs() {
    return (
        <div className="contacts">
            <div className="contacts-questions">
                <h2>Въпроси относно начина на обучение</h2>
                <p>
                    Ако имате въпроси относно дадени дисциплини, които се изучават, специалността,
                    кандидатстването в нея или нещо друго, което сте сметнали за важно, може да пишете
                    на имейлите ни или да напишете Вашето съобщение във формата за контакти отдясно.
                    Ще се свържем с Вас в рамките на няколко часа или до 1 работен ден.
                </p>
            </div>
            <div className="contacts-form">
                <form
                    action="https://formsubmit.co/vgan3v@gmail.com"
                    method="POST"
                >
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
        </div>
    );
}