import { Role, TeamMemberModel } from '@service/models';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import Divider from '@components/common/Divider';
import { isValidEmail, isValidPhoneNumber } from '@utils/validators';
import InputField from '@components/common/InputField';
import FormButton from '@components/common/FormButton';

interface EditMemberProps {
  member?: TeamMemberModel;
  onSave: (member: TeamMemberModel) => void;
  onDelete?: (member: TeamMemberModel) => void;
}

const EditMemberForm = ({ member, onSave, onDelete }: EditMemberProps) => {
  const form = useForm({
    defaultValues: {
      firstName: member?.firstName || '',
      lastName: member?.lastName || '',
      email: member?.email || '',
      phoneNumber: member?.phoneNumber || '',
      role: member?.role || Role.REGULAR,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      const saveMember: TeamMemberModel = {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        phoneNumber: value.phoneNumber,
        role: value.role,
      };
      if (member) {
        saveMember.id = member.id;
      }

      onSave(saveMember);
    },
  });

  const deleteMember = async () => {
    if (member) {
      onDelete?.(member);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <div className="flex flex-col items-stretch">
        <p className="text-lg font-bold mt-3 mb-2 text-left">Info</p>
        <form.Field
          name="firstName"
          validators={{
            onChange: ({ value }) => {
              if (!value || value.length === 0) {
                return 'First name is required';
              }
            },
          }}
          children={(field) => (
            <>
              <InputField
                inError={
                  field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0
                }
                id="fist-name"
                placeholder="First Name"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldError field={field} />
            </>
          )}
        />
        <form.Field
          name="lastName"
          validators={{
            onChange: ({ value }) => {
              if (!value || value.length === 0) {
                return 'Last name is required';
              }
            },
          }}
          children={(field) => (
            <>
              <InputField
                inError={
                  field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0
                }
                id="last-name"
                placeholder="Last Name"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldError field={field} />
            </>
          )}
        />
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => {
              if (!value || value.length === 0) {
                return 'Email is required';
              }
              if (!isValidEmail(value)) {
                return 'Invalid email address';
              }
            },
          }}
          children={(field) => (
            <>
              <InputField
                inError={
                  field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0
                }
                id="email"
                type="email"
                placeholder="Email"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldError field={field} />
            </>
          )}
        />
        <form.Field
          name="phoneNumber"
          validators={{
            onChange: ({ value }) => {
              if (!value || value.length === 0) {
                return 'Phone number is required';
              }
              if (!isValidPhoneNumber(value)) {
                return 'Invalid phone number (10 digits)';
              }
            },
          }}
          children={(field) => (
            <>
              <InputField
                inError={
                  field.state.meta.isTouched &&
                  field.state.meta.errors.length > 0
                }
                id="phone-number"
                placeholder="Phone Number (10 digits)"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldError field={field} />
            </>
          )}
        />
        <p className="text-lg font-bold mt-3 mb-2 text-left">Role</p>
        <form.Field
          name="role"
          children={(field) => (
            <>
              <div className="flex justify-between my-1">
                <label htmlFor="role-regular">
                  Regular - Can't delete members
                </label>
                <input
                  id="role-regular"
                  className="px-4 py-2"
                  type="radio"
                  name={field.name}
                  value={Role.REGULAR}
                  checked={field.state.value === Role.REGULAR}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange(
                      Role[e.target.value as keyof typeof Role]
                    )
                  }
                />
              </div>
              <Divider />
              <div className="flex justify-between my-1">
                <label htmlFor="role-admin">Admin - Can delete members</label>
                <input
                  id="role-admin"
                  className="px-4 py-2"
                  type="radio"
                  name={field.name}
                  value={Role.ADMIN}
                  checked={field.state.value === Role.ADMIN}
                  onBlur={field.handleBlur}
                  onChange={(e) =>
                    field.handleChange(
                      Role[e.target.value as keyof typeof Role]
                    )
                  }
                />
              </div>
              <Divider />
            </>
          )}
        />
        <div className="flex flex-row justify-between mt-5">
          {member ? (
            <FormButton warning type="button" onClick={() => deleteMember()}>
              Delete
            </FormButton>
          ) : (
            <div />
          )}
          <FormButton type="submit">Save</FormButton>
        </div>
      </div>
    </form>
  );
};

const FieldError = ({ field }: { field: AnyFieldApi }) => {
  return field.state.meta.isTouched && field.state.meta.errors.length ? (
    <div className="text-red-500 text-xs text-left ml-1">
      {field.state.meta.errors.join(',')}
    </div>
  ) : (
    <div className="text-xs">&nbsp;</div>
  );
};

export default EditMemberForm;
