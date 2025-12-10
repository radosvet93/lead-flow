import * as z from "zod";
import { useForm } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Project name must be at least 5 characters.")
    .max(32, "Project name must be at most 32 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters.")
    .max(100, "Description must be at most 100 characters."),
});

interface ProjectFormProps {
  setIsCreating: (creating: boolean) => void,
}

const ProjectForm = ({ setIsCreating }: ProjectFormProps) => {
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: ({ value }) => {
      console.log('sumbitting', value);

      setIsCreating(false);
    }
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        void form.handleSubmit();
      }}
    >
      <Card className="w-xl flex justify-center m-auto p-6 space-y-4">
        <CardHeader>
          <CardTitle>Create new project</CardTitle>
          <CardDescription>Add your project name and description below</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Project Name</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="e.g., Manufacturing ERP, SaaS for Agencies"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="description"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Project Description</FieldLabel>
                    <InputGroup>
                      <InputGroupTextarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => field.handleChange(e.target.value)}
                        placeholder="What is your project or idea about, write a couple of sentences"
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={isInvalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.state.value.length}/100 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                    <FieldDescription>
                      Include your target audience, what the idea is trying to solve and why it might be successful
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">
              Create Project
            </Button>
            <Button
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => {
                setIsCreating(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </CardFooter>
      </Card>
    </form>
  );
};

export default ProjectForm;