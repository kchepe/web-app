export class UpdatePasswordCommand {
  constructor(
    public readonly employeeId: string,
    public readonly newPassword: string
  ) {}
}
