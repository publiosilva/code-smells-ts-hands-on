// CÓDIGO COM CODE SMELL: COMMENTS
// O code smell Comments ocorre quando o código depende de muitos comentários para explicar uma lógica complexa ou confusa.
// Neste exemplo, há um bloco de comentários detalhando cada condição de acesso, pois o código não é autoexplicativo.
// Isso indica que o código poderia ser melhorado para ser mais legível sem tantos comentários.
type User = {
  id: number;
  role: string;
  isActive: boolean;
  flags: string[];
  lastLogin: Date;
  country: string;
};

type Resource = {
  requiredRole: string;
  restrictedCountries: string[];
  allowedHours: [number, number];
};

class AccessControl {
  canAccessResource(user: User, resource: Resource): boolean {
    const now = new Date();
    const currentHour = now.getHours();

    // - User must be active
    // - User's role must match the required role for the resource
    // - User must NOT have the "banned" flag
    // - User must have logged in at least once in the past 30 days
    // - The user's country must not be in the list of restricted countries
    // - The current hour must be within the allowed hours for the resource
    // - The user must not have the "restricted_time_access" flag
    // If any of these are false, we return false (access denied)
    if (
      !user.isActive ||
      user.role !== resource.requiredRole ||
      user.flags.includes("banned") ||
      (new Date().getTime() - user.lastLogin.getTime()) > 30 * 24 * 60 * 60 * 1000 || // 30 days in ms
      resource.restrictedCountries.includes(user.country) ||
      (user.flags.includes("restricted_time_access") && (currentHour < resource.allowedHours[0] || currentHour >= resource.allowedHours[1]))
    ) {
      console.log("Access denied");
      return false;
    }

    // If both conditions passed, user can access the resource
    console.log("Access granted.");
    return true;
  }
}

export { AccessControl };
