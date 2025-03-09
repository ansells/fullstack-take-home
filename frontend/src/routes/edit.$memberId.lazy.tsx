import BackButton from '@components/common/BackButton';
import Card from '@components/common/Card';
import ErrorMessage from '@components/common/ErrorMessage';
import EditMemberForm from '@components/members/EditMemberForm';
import { invalidateMember } from '@service/invalidations';
import { TeamMemberModel } from '@service/models';
import { useDeleteMember, useUpdateMember } from '@service/mutations';
import { useMember } from '@service/queries';
import { createLazyFileRoute, useRouter } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/edit/$memberId')({
  component: EditPage,
});

function EditPage() {
  const { memberId } = Route.useParams();
  const id = parseInt(memberId, 10);
  const { data, isPending, error } = useMember({ id });
  const updateMutation = useUpdateMember(id);
  const deleteMutation = useDeleteMember(id);
  const router = useRouter();

  const saveMember = (member: TeamMemberModel) => {
    console.log('Saving member: ', member);
    updateMutation.mutate(member);
  };

  const deleteMember = (member: TeamMemberModel) => {
    console.log(`Deleting member ${member.id}`);
    deleteMutation.mutate();
  };

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (updateMutation.isPending) {
    return <div>Saving...</div>;
  }

  if (deleteMutation.isPending) {
    return <div>Deleting...</div>;
  }

  if (error || updateMutation.isError || deleteMutation.isError) {
    const errorMessage =
      error?.message ||
      updateMutation.error?.message ||
      deleteMutation.error?.message ||
      'An error occurred';
    return (
      <>
        <ErrorMessage message={errorMessage} />
        <button onClick={() => invalidateMember(id)}>Retry</button>
      </>
    );
  } else if (!data) {
    return <ErrorMessage message="Member not found" />;
  }

  if (updateMutation.isSuccess || deleteMutation.isSuccess) {
    router.history.push('/');
    return;
  }

  const member: TeamMemberModel = data;
  return (
    <Card
      header={
        <div className="flex flex-row justify-start px-3 py-2">
          <BackButton />
        </div>
      }
      title="Edit team member"
      subTitle="Edit contact info, location and role."
    >
      <EditMemberForm
        member={member}
        onSave={saveMember}
        onDelete={deleteMember}
      />
    </Card>
  );
}
