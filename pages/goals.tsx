import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export type Goal = {
  id: number;
  prev_id: number | null;
  title: string;
  description: string;
  deadline: string;
  status: string;
  created_at: string;
  updated_at: string;
}


export default function Goals() {

  let data: Goal[] = [
    {
      id: 1,
      title: 'ゴール1',
      prev_id: null,
      description: 'ゴール1の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 2,
      title: 'ゴール2',
      prev_id: null,
      description: 'ゴール2の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 3,
      title: 'ゴール3',
      prev_id: null,
      description: 'ゴール3の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 4,
      title: 'ゴール4',
      prev_id: null,
      description: 'ゴール4の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 5,
      title: 'ゴール5',
      prev_id: null,
      description: 'ゴール5の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 6,
      title: 'ゴール6',
      prev_id: null,
      description: 'ゴール6の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 7,
      title: 'ゴール7',
      prev_id: null,
      description: 'ゴール7の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 8,
      title: 'ゴール8',
      prev_id: null,
      description: 'ゴール8の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    },
    {
      id: 9,
      title: 'ゴール9',
      prev_id: null,
      description: 'ゴール9の説明',
      deadline: '2021-01-01',
      status: '未着手',
      created_at: '2021-01-01',
      updated_at: '2021-01-01',
    }
  ]


  const [goals, setGoals] = useState<Goal[]>(data);

  useEffect(() => {
    setGoals(data);
  }, []);

  const handleChangeGoalTitle = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newGoals = goals.map((goal) => {
      if (goal.id === id) {
        return {
          ...goal,
          title: e.target.value
        }
      }
      return goal;
    });
    setGoals(newGoals);
  };

  const handleChangeGoalDeadline = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const newGoals = goals.map((goal) => {
      if (goal.id === id) {
        return {
          ...goal,
          deadline: e.target.value
        }
      }
      return goal;
    });
    setGoals(newGoals);
  };

  const handleChangeGoalDescription = (e: React.ChangeEvent<HTMLTextAreaElement>, id: number) => {
    const newGoals = goals.map((goal) => {
      if (goal.id === id) {
        return {
          ...goal,
          description: e.target.value
        }
      }
      return goal;
    });
    setGoals(newGoals);
  };



  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className='text-4xl font-bold'>ゴール</div>
        <div className='grid grid-cols-3 gap-4'>
          {goals.map((goal) => (
            <div key={goal.id} className='bg-sky-100 h-80 w-80 p-5 rounded-md'>
              <input type="text" className="w-full font-bold text-xl bg-sky-100 py-3" value={goal.title} onChange={(e) => handleChangeGoalTitle(e, goal.id)} />
              <div className='flex'>
                <div className='w-full h-16'>
                  <div className='font-bold'>期限</div>
                  <input type="date" className="w-1/2 bg-sky-100 " value={goal.deadline} onChange={(e) => handleChangeGoalDeadline(e, goal.id)} />
                </div>
              </div>
              <div className='w-full h-16'>
                <div className='font-bold'>説明</div>
                <textarea className="w-full h-16 bg-sky-100" value={goal.description} onChange={(e) => handleChangeGoalDescription(e, goal.id)} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
