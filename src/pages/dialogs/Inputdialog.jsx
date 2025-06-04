import { Dialog, Button, Input, Typography, IconButton } from "@material-tailwind/react";
import { Xmark } from "iconoir-react";

const Inputdialog = (props) => {
  return (
    <Dialog size="sm" className="text-white">
      <Dialog.Trigger as={Button}>Enter PIN</Dialog.Trigger>
      <Dialog.Overlay>
        <Dialog.Content className="bg-white pb-10">
            <form action="#" className="">
              <div className="flex justify-end">
                  <Dialog.DismissTrigger as={IconButton} size="xl" variant="ghost" color="secondary">
                      <Xmark className="h-24 w-16 text-red-500" />
                  </Dialog.DismissTrigger>
              </div>
              <div className="flex justify-center">
                {/* <div className="flex-1"></div> */}
                <Typography className="mb-10 font-bold text-2xl">
                    Enter your 4 digit Pin
                </Typography>
              </div>
            <div className="flex justify-center gap-2 mb-20 ml-4">
              {[1, 2, 3, 4].map((index) => (
                <Input
                  key={index}
                  type="number"
                  maxLength={1}
                  className="w-12 text-center text-white text-2xl bg-black"
                  placeholder="*"
                />
              ))}
            </div>

            <div className="mb-1 mt-8 flex items-center justify-center gap-2">
              <Button className="flex ml-6 bg-blue-950 px-8 text-white text-2xl">Confirm</Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog>
  )
}

export default Inputdialog