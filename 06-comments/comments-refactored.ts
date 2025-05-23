// CÓDIGO REFATORADO: REMOÇÃO DO COMMENTS
// Para resolver o problema, extraímos cada condição para variáveis com nomes descritivos.
// Agora, o código é autoexplicativo e não depende de comentários para ser entendido.
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

const THIRTY_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;

class AccessControl {
  canAccessResource(user: User, resource: Resource): boolean {
    const now = new Date();
    const currentHour = now.getHours();

    const userIsActive = user.isActive;
    const userRoleMatchesResource = user.role === resource.requiredRole;
    const userIsNotBanned = !user.flags.includes("banned");
    const userHasLoggedInRecently = (new Date().getTime() - user.lastLogin.getTime()) < THIRTY_DAYS_IN_MS;
    const userIsNotInRestrictedCountry = !resource.restrictedCountries.includes(user.country);
    const userIsInAllowedTimeRange = !user.flags.includes("restricted_time_access") || (currentHour >= resource.allowedHours[0] && currentHour < resource.allowedHours[1]);

    if (
      !userIsActive ||
      !userRoleMatchesResource ||
      !userIsNotBanned ||
      !userHasLoggedInRecently ||
      !userIsNotInRestrictedCountry ||
      !userIsInAllowedTimeRange
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
