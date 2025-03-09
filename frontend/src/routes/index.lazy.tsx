import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useMemberList } from '@service/queries';
import ErrorMessage from '@components/common/ErrorMessage';
import TeamMember from '@components/members/TeamMember';
import Divider from '@components/common/Divider';
import Card from '@components/common/Card';
import { invalidateMembers } from '@service/invalidations';
import PlusIcon from '@assets/plus.svg';

export const Route = createLazyFileRoute('/')({
  component: ListPage,
});

function ListPage() {
  // TODO: Implement pagination
  // const { page } = Route.useSearch();
  // const navigate = useNavigate({ from: Route.useLocation() });
  // const setPage = (page: number) =>
  //   navigate({ search: (prev) => ({ ...prev, page }) });
  const navigate = useNavigate();
  const { data, isPending, error } = useMemberList({ page: 1 });
  const { members = [], totalMembers = 0 } = data || {};

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <>
        <ErrorMessage message={error.message} />
        <button onClick={() => invalidateMembers()}>Retry</button>
      </>
    );
  }

  return (
    <>
      <Card
        header={
          <div className="flex flex-row justify-end px-3 py-2">
            <Link to="/add">
              <img className="w-10 h-10" src={PlusIcon} alt="Add" />
            </Link>
          </div>
        }
        title="Team members"
        subTitle={`You have ${totalMembers} members.`}
      >
        <div className="flex flex-col align-center">
          {members.map((member, idx) => (
            <>
              <div className="py-">
                <TeamMember
                  member={member}
                  onClick={(id) => navigate({ to: `/edit/${id}` })}
                />
              </div>
              {idx < members.length - 1 && <Divider />}
            </>
          ))}
        </div>
      </Card>
    </>
  );
}

export default ListPage;
