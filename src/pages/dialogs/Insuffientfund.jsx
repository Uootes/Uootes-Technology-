import DialogNotification from './DialogNotification';
import { Heart } from "iconoir-react";

export default function Insuffientfund(){
  return (
    <DialogNotification
          title="Activate Your Account to Access All Dashboard Features"
          icon={<Heart className="h-24 w-24 pb-0" />}
          buttonLabel="Activate"
        />
  );
}
