import { Contatcs } from './Contacts';
import { Semesters } from './Semesters';

export function Students() {
    return (
        <>
            <div className="students-main">
                <h1 className="title">Студенти</h1>
                <div className="students-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
                        labore autem quod nobis, porro pariatur et illo voluptatem error
                        similique distinctio voluptatum mollitia, necessitatibus nesciunt! Nemo
                        suscipit voluptas itaque harum.
                        za cqlata y4ebna programa kliknete <a href="https://shorturl.at/dmyAJ" target="_blank">tyk</a>
                    </p>
                </div>
                <Semesters />
                <Contatcs />
            </div>
        </>
    );
}
