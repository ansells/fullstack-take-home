import { TeamMemberModel, Role } from '@service/models';
import TeamIcon from '@assets/team.svg';
import { formatPhoneNumber } from '@utils/formatters';

interface TeamMemberProps {
  member: TeamMemberModel;
  onClick?: (id: number) => void;
}

const TeamMember = ({ member, onClick }: TeamMemberProps) => {
  const { id, firstName, lastName, email, phoneNumber, role } = member;

  const handleClick = () => {
    if (onClick && id) {
      onClick(id);
    }
  };

  return (
    <>
      <div
        className={`card ${onClick && 'cursor-pointer'}`}
        onClick={handleClick}
      >
        <div className="flex flex-row ">
          <img
            className="w-12 h-12 mr-5"
            alt="team member icon"
            src={TeamIcon}
          />
          <div className="flex flex-col items-start">
            <h3 className="mb-1 text-lg font-bold">
              {firstName} {lastName} {role === Role.ADMIN ? '(admin)' : ''}
            </h3>
            <p className="mb-1">{formatPhoneNumber(phoneNumber)}</p>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
