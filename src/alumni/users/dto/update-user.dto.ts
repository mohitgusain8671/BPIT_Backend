import {
  IsBoolean,
  IsInt,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { Role } from '../enum';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsNumberString()
  @IsOptional()
  mobile: string;

  @IsString()
  @IsOptional()
  section: string;

  @IsNumber()
  @IsOptional()
  passingYear: number;

  @IsNumber()
  @IsOptional()
  enrollmentNumber: number;

  @IsString()
  @IsOptional()
  role: Role;

  @IsString()
  @IsOptional()
  fathersName: string;

  @IsString()
  @IsOptional()
  mothersName: string;

  @IsNumberString()
  @IsOptional()
  parentsPhone: string;

  @IsString()
  @IsOptional()
  hobby: string;

  @IsBoolean()
  @IsOptional()
  isApproved: boolean;

  @IsBoolean()
  @IsOptional()
  isVerified: boolean;

  @IsString()
  @IsOptional()
  profilePictureUrl: string;

  @IsString()
  @IsOptional()
  githubProfileUrl: string;

  @IsString()
  @IsOptional()
  linkedInProfileUrl: string;

  @IsString()
  @IsOptional()
  twitterProfileUrl: string;

  @IsString()
  @IsOptional()
  gfgProfileUrl: string;

  @IsString()
  @IsOptional()
  codingNinjaProfileUrl: string;

  @IsString()
  @IsOptional()
  leetcodeProfileUrl: string;

  @IsString()
  @IsOptional()
  codeforcesProfileUrl: string;

  @IsString()
  @IsOptional()
  instagramProfileUrl: string;

  @IsString()
  @IsOptional()
  branch: string;

  @IsNumber()
  @IsOptional()
  facultyId: number;

  @IsNumber()
  @IsOptional()
  societyId: number;
}
