export default function DrivelinkToCdn(driveLink: string): string {
  const match = driveLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)\//);
  if (!match || match.length < 2) {
    return "";
  }
  const fileId = match[1];
  return `https://drive.google.com/uc?export=view&id=${fileId}`;
}
