export interface ICredentialRepository {
  updatePassword: (employeeId: string, newPassword: string) => Promise<void>;
}
