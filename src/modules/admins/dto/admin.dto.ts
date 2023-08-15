import { SharedContact } from 'src/shared/master-types/shared-contact';
import { SharedTimeStamps } from 'src/shared/master-types/shared-time-stamps';
import { SharedUserDetails } from 'src/shared/master-types/shared-user-details';

export class AdminDTO
  implements SharedContact, SharedUserDetails, SharedTimeStamps
{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNo: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  isActive?: boolean;
  roles?: Array<string>;
}
