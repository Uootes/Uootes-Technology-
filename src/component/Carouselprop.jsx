import Carouselgroup from './Carouselgroup';

const App = () => {
  const TokenGroup = [
    {
      id: 1,
      username: 'Ethan Carter',
      tokenlevel: 'Highest CPT tokens purchased',
      tokenAmount: '500,000 CPT',
      groupNo: '01',
    },
    {
      id: 2,
      username: 'Ethan Carter',
      tokenlevel: 'Highest Direct Invite',
      tokenAmount: '100',
      groupNo: '02',
    },
    {
      id: 3,
      username: 'Ethan Carter',
      tokenlevel: 'Highest Net Invite',
      tokenAmount: '200,000',
      groupNo: '03',
    },
  ];

  return (
    <div>
      <Carouselgroup tokenGroup={TokenGroup} />
    </div>
  );
};

export default App;