"use server"

import { connect } from "@/utilities/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server"


export default async function AddComment({postId, parentCommentId}, formData) {

    const {userId} = await auth();
    const db = connect();

    await db.query(
        "INSERT INTO comments (clerk_id, post_id, parent_comment_id, body) VALUES ($1, $2, $3, $4)",
        [userId, postId, parentCommentId, formData.get("body")]
    )

    revalidatePath(`/post/${postId}`);
    return { success: true}
    
}