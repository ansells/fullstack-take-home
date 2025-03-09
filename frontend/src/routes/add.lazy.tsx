import { createLazyFileRoute, useRouter } from '@tanstack/react-router';
import { TeamMemberModel } from '@service/models';
import Card from '../components/common/Card';
import EditMemberForm from '../components/members/EditMemberForm';
import BackButton from '@components/common/BackButton';
import { useAddMember } from '@service/mutations';
import ErrorMessage from '@components/common/ErrorMessage';

export const Route = createLazyFileRoute('/add')({
  component: AddPage,
});

function AddPage() {
  const addMutation = useAddMember();
  const router = useRouter();

  const saveMember = (member: TeamMemberModel) => {
    console.log('Adding member: ', member);
    addMutation.mutate(member);
  };

  if (addMutation.isPending) {
    return <div>Saving...</div>;
  }

  if (addMutation.isError) {
    return (
      <>
        <ErrorMessage message={addMutation.error.message} />
        <button
          onClick={() => {
            router.history.go(0);
          }}
        >
          Retry
        </button>
      </>
    );
  }

  if (addMutation.isSuccess) {
    router.history.push('/');
  }

  return (
    <Card
      header={
        <div className="flex flex-row justify-start px-3 py-2">
          <BackButton />
        </div>
      }
      title="Add a team member"
      subTitle="Set email, location and role.."
    >
      <EditMemberForm onSave={saveMember} />
    </Card>
  );
}

export default AddPage;
