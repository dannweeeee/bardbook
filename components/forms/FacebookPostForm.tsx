"use client";

import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ZodError, z } from "zod";
import { SyncLoader } from "react-spinners";
import FacebookApiService from "../facebook-api";

const postSchema = z.object({
  post: z.string().min(0, { message: "Post is required" }),
});

type PostForm = z.infer<typeof postSchema>;

const FacebookPostForm = () => {
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const { control, handleSubmit } = useForm<PostForm>();

  const handleCreatePost = async (data: PostForm) => {
    try {
      setIsCreatingPost(true);
      const post = await FacebookApiService.createPost(data.post);

      console.log("POST", post);
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Error creating user:", error);
      }
    } finally {
      setIsCreatingPost(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreatePost)}
      className="flex flex-col justify-center gap-5 text-white w-full max-w-2xl mx-auto"
    >
      <label className="flex font-bold text-xl items-center justify-center mb-5">
        Publish a Post on Facebook
      </label>

      <Textarea
        className="rounded-2xl w-full text-black"
        label="Post"
        rows={8}
        {...(control as any).register("post", {
          required: "Post is required",
        })}
      />

      <Button
        type="submit"
        disabled={isCreatingPost}
        className="h-12 gap-2 bg-[#1877F2] hover:bg-[#ADBFDA] text-[#E6E6E6] hover:text-[#000000] rounded-2xl text-base"
      >
        {isCreatingPost ? (
          <>
            Publishing Post
            <SyncLoader size={5} color="#E6E6E6" />
          </>
        ) : (
          "Publish"
        )}
      </Button>
    </form>
  );
};

export default FacebookPostForm;
