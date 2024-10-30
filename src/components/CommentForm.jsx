"use client";

import { useFormStatus} from "react-dom";
import { useFormState } from "react-dom";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

export default function CommentForm({postId, parentCommentId}) {
    const [state, dispatch] = useFormState(AddComment, {
    postId,
    parentCommentId
    });
    const [isOpen, setOpen] = useState(false);
    const boundDispatch = dispatch.bind({postId, parentCommentId});
    const {pending} = useFormStatus();

    useEffect (() => {
        if (state.success) {
            setOpen(false);
        }},
        [state.success])

return (
    <div className="">
        <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? "X" : "Add Comment"}
        </button>
        {isOpen ? (
    <div>
        <form action={boundDispatch}>
            <textarea name="body" placeholder="Comment" className="text-black"/>
            <button type="submit" disable={pending}>{pending ? "Submitting" : "Submit"}</button>
        </form>
    </div>
    ) : null}
    </div>
  );
}