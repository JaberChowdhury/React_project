import { useModel } from '@/context/ModelContextProvider';
import { Button } from './ui/button';

const Model = () => {
  const { content, isOpen, closeModel } = useModel();
  return (
    <div
      style={{
        display: isOpen ? 'flex' : 'none',
      }}
      className="w-screen h-screen z-20 bg-slate-950/[0.7] fixed left-0 flex justify-center items-center flex-col"
    >
      <div>{content}</div>{' '}
      <Button className="w-[20%] my-2.5" onClick={closeModel}>
        Close
      </Button>
    </div>
  );
};

export default Model;
