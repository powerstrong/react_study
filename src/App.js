import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id':123,
    'image':'https://placeimg.com/64/64/1', // 이미지크기 64*64 랜덤
    'name': '이주성',
    'birthday': '850504',
    'gender': '남자',
    'job': '아저씨'
  },
  {
    'id':124,
    'image':'https://placeimg.com/64/64/2',
    'name': '이선미',
    'birthday': '812345',
    'gender': '여자',
    'job': '아줌마'
  },
  {
    'id':125,
    'image':'https://placeimg.com/64/64/3',
    'name': '이다은',
    'birthday': '812333',
    'gender': '여자',
    'job': '언니'
  }
]

function App() {
  return (
    <div>
      { customers.map(c => { return (
            <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
          );
        })
      }
    </div>
  );
}

export default App;
