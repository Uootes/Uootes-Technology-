import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
  const tasks = [
    { id: 1, task: 'Follow us on TikTok', status: 'start', link: 'https://www.tiktok.com/@uootes_tech' },
    { id: 2, task: 'Follow us on YouTube', status: 'start', link: 'https://www.youtube.com/@uootes?si=71iE6AIrhXayKY2h' },
    { id: 3, task: 'Follow us on X', status: 'start', link: 'https://www.x.com/Uootes_tech?t=8UyvLaIGCF83Y_VZmS53w&s09' },
    { id: 4, task: 'Follow us on Facebook', status: 'start', link: 'https://www.facebook.com/expowerh.o.w?mibextid=ZbWKwL' },
    { id: 5, task: 'Follow us on Instagram', status: 'start', link: 'https://www.instagram.com/uootes_tech?igsh=OGQ5ZDc2ODK2ZA==' },
    { id: 6, task: 'Follow us on Telegram', status: 'start', link: 'https://t.me/uootes_tech' },
    { id: 7, task: 'Follow us on WhatsApp', status: 'start', link: 'https://www.whatsapp.com/channel/0029Vb62PswDJ6GtcxVbQS0d' },
    { id: 8, task: 'Setup your account', status: 'start', link: '/setup' },
    { id: 9, task: 'Share your Referral link to 10 people on WhatsApp', status: 'start', link: '/referral' },
    { id: 10, task: 'Understand your dashboard', status: 'start', link: '/dashboard' },
    { id: 11, task: 'Understand how this platform works', status: 'start', link: '/platform' },
  ];

  const [tasksState, setTasksState] = useState(tasks);

  const toggleTaskStatus = (id) => {
    setTasksState((prevState) =>
      prevState.map((task) =>
        task.id === id
          ? { ...task, status: task.status === 'done' ? 'start' : 'done' }
          : task
      )
    );
  };

  const completedTasksCount = tasksState.filter((task) => task.status === 'done').length;

  return (
      <div className="h-['100px'] w-full bg-black text-white px-4 py-10 rounded-md hover:bg-slate-900">
        {/* Task List */}
        <div className="">
          {/* <button className='text-3xl'><FontAwesomeIcon icon={faArrowLeft} /></button> */}
          <h2 className="text-3xl font-bold my-2 text-center">Tasks</h2>
          <div className='ml-[410px] text-gray-400 mb-4 sm:ml-[1190px]'>
            {completedTasksCount}/{tasksState.length}
          </div>
          <div className="space-y-4">
            {tasksState.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center p-2 outline-gray-500 outline bg-gray-800 rounded-lg shadow-md"
              >
                <span className="text-lg">{task.task}</span>
                <a
                  href={task.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-full border-spacing-y-20 text-white ${
                    task.status === 'done' ? 'bg-green-600' : 'bg-orange-600'
                  }`}
                  onClick={(e) => {
                    // Prevent navigation when the status is 'done' and we don't need to navigate
                    if (task.status === 'done') {
                      e.preventDefault();
                    } else {
                      toggleTaskStatus(task.id);
                    }
                  }}
                >
                  {task.status === 'done' ? 'Done' : 'Start'}
                </a>
              </div>
            ))}
          </div>
          <div className="pt-10 text-center">
            <button className='bg-blue-950 text-white px-4 py-3 rounded-md text-xl'>
              DONE
            </button>
          </div>
        </div>
      </div>
  );
};

export default TaskList;