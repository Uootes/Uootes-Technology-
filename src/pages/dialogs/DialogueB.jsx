import { Dialog, Button, Typography, IconButton } from "@material-tailwind/react";

export default function DialogueB(props) {
  return (
    <Dialog size="sm" className="text-white">
          <Dialog.Trigger as={Button}>Open Notification</Dialog.Trigger>
          <Dialog.Overlay>
            <Dialog.Content className="bg-white">
              <div className="flex items-center justify-between">
                <div className="m-auto">
                  <IconButton size="xl" color={props.iconColor} variant="ghost">
                    {props.icon}
                  </IconButton>
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
            </Dialog.Content>
          </Dialog.Overlay>
    </Dialog>
  );
}
