import { Contatcs } from './Contacts';
import { BachelorSemesters } from './BachelorSemesters';
import { MastersSemesters } from './MastersSemesters';

export function Students() {
    return (
        <>
            <div className="students-main">
                <h1 className="title">Студенти</h1>
                <div className="students-info">
                    <p className="paragraph">
                        Добрата комуникация между студентите и преподавателите, улеснявайки
                        процеса на обучение и развитие на учебната програма. За цялата учебна
                        програма на бакалаврите, кликнете <a href="http://tu-sliven.com/uplanove/Upl_Kollege/Upl_TDMMI_PB_2019.pdf" target="_blank">тук</a>,
                        а за магистрите - <a href="https://shorturl.at/ckp18" target="_blank">тук</a>.
                        За актуален седмичен разпис, кликнете върху картата със <u>сегашния</u> семестър
                    </p>
                </div>
                <BachelorSemesters />
                <MastersSemesters />
                <Contatcs />
            </div>
        </>
    );
}
