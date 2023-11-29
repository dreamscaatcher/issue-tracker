'use client'

import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import {useForm, Controller, Form} from 'react-hook-form'
import axios from 'axios'
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
	title: string;
	description: string;	
}

const NewIssuePage = () => {
	const router= useRouter();
	const {register, control, handleSubmit}=useForm<IssueForm>();
	return (
		<form className="max-w-xl space-y-4" 
		onSubmit={handleSubmit(async(data)=>{
			await axios.post('/api/issue', data);
			router.push('/issues');
		})}>
			<TextField.Root>
				<TextField.Input placeholder="Title" {...register('title')} />
			</TextField.Root>
			<Controller
			name="description"
			control={control}
			render={({field})=> <SimpleMDE placeholder="Decription" {...field} /> } 
			/>
			<Button>Submit New Issue</Button>		
		</form>
	);
};

export default NewIssuePage;