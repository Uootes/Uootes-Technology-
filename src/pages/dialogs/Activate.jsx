import DialogNotification from '../dialogs/DialogNotification';
// import DialogNotification from '../dialogs/DialogNotification';
import { Heart } from "iconoir-react";
// import DialogueB from './DialogueB';

function Activate() {
  const now = new Date();
  const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;

  return (
        // 1
    // <DialogNotification
    //   title="Activate Your Account to Access All Dashboard Features"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="Activate"
    // />
        // 2
    // <DialogueB
    //   title="Activation Successful! Your account is now active"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 3
    // <DialogueB
    //   title="Insufficient funds. Please add funds to complete activation."
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 4
    // <DialogueB
    //   title="Payment deposit has been canceled."
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 5
    // <DialogueB
    //   title="We have notified the Exchanger to release the token. You will receive the token shortly."
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 6
    // <DialogNotification
    //   title="We're sorry for the delay. if you haven't received your payment, please dispute the transaction to resolve the issue."
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="Dispute"
    // />
      // 7
    // <DialogNotification
    //   message="A dispute appeal has been filled regarding this transaction. Your approval is required to proceed with the investigation. Please note that if we do not receive your approval within the next 30 minutes, the appeal will be automatically canceled. Additionally, a penalty of 5 GSC will be imposed."
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="Approved"
    //   time={time}
    // />
      // 8
    // <DialogNotification
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   message="Before proceeding with your appeal, please note the following:
    //   -If the investigation finds you guilty, you will be required to pay a minimum fine of 10 GSC, which may increase depending on the transaction amount.
    //   -A non-refundable appeal fee of 2 GSC will be charged to process your appeal. The appeal fee and potential fine will be deducted directly from your wallet balance. If your balance is insufficient, the amount will be added as loan.
    //   By proceeding with your appeal, you acknowledge that you understand and accept these terms. Please confirm to continue."
    //   buttonLabel="Confirm"
    // />
      // 9
    // <DialogueB
    //   title="Appeal dispute submission successful!"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 10
    // <DialogueB
    //   title="Our team is working diligently to investigate your case. We'll be in touch soon!"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    //   buttonTwo="Withdraw Appeal"
    // />
      // 11
    // <DialogueB
    //   title="You've successfully withdrawn your dispute appeal"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 12
    // <DialogueB
    //   title="Payment withdrawal has been canceled"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 13
    // <DialogueB
    //   title="Withdrawal canceled due to change of mind"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 14
    // <DialogueB
    //   title="Token released! Transaction complete"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 15
    // <DialogueB
    //   title="Token released! Transaction complete"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 16
    // <DialogueB
    //   title="Purchase Successful!"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 17
    // <DialogueB
    //   title="Sales Successful!"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 18
    // <DialogueB
    //   title="Sorry there are insufficient funds available in the pool balance to complete this transaction."
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 19
    // <DialogueB
    //   title="Update Successful!"
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
      // 20
    <DialogNotification
      title="Verify Your Account to Access All Dashboard Features!"
      icon={<Heart className="h-24 w-24 pb-0" />}
      buttonLabel="Verify"
    />
      // 21
    // <DialogueB
    //   title="KYC Verification Submitted!"
    //   message= "Thank you for completing your KYC verification. We will review your documents within 24 hours. You will receive a notification once your verification is complete."
    //   icon={<Heart className="h-24 w-24 pb-0" />}
    //   buttonLabel="OK"
    // />
    );
}

export default Activate;