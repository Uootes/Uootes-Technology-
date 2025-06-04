import { Dialog, Button, Typography, IconButton } from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

export default function DialogNotification(props) {

  return (
    <Dialog size="sm" className="text-white">
      <Dialog.Trigger as={Button}>Open Notification</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content className="bg-white">
          <div className="flex items-center justify-between">
            <div className="flex-1"></div>
            <div>
              <IconButton size="xl" color={props.iconColor} variant="ghost">
                {props.icon}
              </IconButton>
            </div>
            <div className="flex-1 flex justify-end">
              <Dialog.DismissTrigger as={IconButton} size="xl" variant="ghost" color="secondary" onClick={props.onDismiss}>
                <Xmark className="h-24 w-16 text-red-500" />
              </Dialog.DismissTrigger>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center text-center">
            <Typography type="h6">{props.title}</Typography>
            <Typography type="p">{props.message}</Typography>
          </div>

          <div className="mb-1 mt-8 flex items-center justify-center gap-2">
            <Button className="bg-blue-950 px-8 text-white text-2xl" onClick={props.onButtonClick}>
              {props.buttonLabel}
            </Button>
          </div>

          {/* <div className="mb-2 mt-4  items-center justify-center ">
            <Button className="px-8 bg-blue-950 text-orange-600 text-2xl" onClick={props.onButtonClick}>
              {props.buttonTwo}
            </Button>
          </div> */}

          <div className="mb-1 mt-2 flex items-center justify-center text-red-600">
            {props.time}
          </div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  );
}