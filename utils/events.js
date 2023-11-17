import '../styles/main.scss';

import { students, voldysArmy } from './sample_data/data';

import filterBtnRow from '../components/filterBtnRow';
import studentAreas from '../components/studentAreas';
import { form } from './form';

import studentsOnDom from './studentsOnDom';

const events = () => {
  document.querySelector('#start-sorting').addEventListener('click', () => {
    form();
    filterBtnRow();
    studentAreas();
  });

  document
    .querySelector('#student-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('expel')) {
        const [, id] = e.target.id.split('--');
        const index = students.findIndex((student) => student.id === Number(id));

        voldysArmy.push(...students.splice(index, 1));
        studentsOnDom('#students', students);
        studentsOnDom('#voldy', voldysArmy);
      }
    });

  document.querySelector('#filter-container').addEventListener('click', (e) => {
    if (e.target.id.includes('filter')) {
      const [, house] = e.target.id.split('--');

      if (house === 'all') {
        studentsOnDom('#students', students);
      } else if (house) {
        const filter = students.filter((student) => student.house === house);
        studentsOnDom('#students', filter, house);
      }
    }
  });
};

export default events;
