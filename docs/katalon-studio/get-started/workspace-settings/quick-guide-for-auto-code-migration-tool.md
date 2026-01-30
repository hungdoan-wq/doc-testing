---
title: Quick Guide for Auto Code Migration in Katalon Studio
---

This guide shows you how to use the automatic code migration tool when upgrading projects across versions.

## Migration rules

The migration tool applies a set of automated recipes developed based on the following official guides:  
- [Migrate from Katalon Studio 8.x to 9.0.0](/katalon-studio/get-started/workspace-settings/katalon-studio-migration-guide/migrate-katalon-studio-from-8.x-to-9.0.0)  
- [Migrate from Katalon Studio 9.x to 10.x](/katalon-studio/get-started/workspace-settings/katalon-studio-migration-guide/migrate-katalon-studio-from-9.x-to-10.x)
- [Migrate from Katalon Studio 10.x to 11.x](/katalon-studio/get-started/workspace-settings/katalon-studio-migration-guide/migrate-katalon-studio-from-10.x-to-11.x)

We recommend reviewing these documents to understand the **key changes** between versions.  

:::info Disclaimer
- The tool may not resolve all migration issues, especially for projects with heavy customization.  
- Migration scope does **not** include project settings.  
- Manual adjustments might still be required after migration.  
:::

## Migration steps

1. Open your project in Katalon Studio, go to **Tools** > **Auto-migrate scripts** and select the suitable option for your setup.
   <img src="https://tw-cdn.katalon.com/katalon-studio/auto-migrate-tool/ks11-auto-migrate-scripts.png" alt="Select an auto-migrate option" width="500" />
2. Review the confirmation dialog and click **Start Migration**.
    <img src="https://tw-cdn.katalon.com/katalon-studio/auto-migrate-tool/confirm-migration-dialog.png" alt="Select an auto-migrate option" width="500" />

3. The **Migrate Assistant** tab will show progress and list the files being updated in real time.  
   <img src="https://tw-cdn.katalon.com/katalon-studio/auto-migrate-tool/migrate-assistant-tab.png" alt="Migrate assistant tab" width="700" />

   Once the migration is complete, select **View Change Log** to review the changes.  
   <img src="https://tw-cdn.katalon.com/katalon-studio/auto-migrate-tool/view-change-log.png" alt="Migrate assistant tab" width="700" />

## Reverting migration

If the migration does not work as expected, you can safely revert:  
- In the **Migrate Assistant** tab, click **Revert**, or  
- Navigate to **Tools** > **Migration** > **Revert**.  

<img src="https://tw-cdn.katalon.com/katalon-studio/auto-migrate-tool/revert-changes.png" alt="Migrate assistant tab" width="500" />

Reverting will restore your project to the exact state before you clicked **Migrate**.  

## Known limitations

- Some uncommon Groovy syntax may not be migrated automatically.
- Depending on project complexity, manual adjustments may be required. In this case, refer to the next section for troubleshooting.

## Reporting issues

If the migration does not behave as expected:
1. Locate the migration folder (created automatically after each migration attempt). The folder contains logs and diffs needed for troubleshooting.
2. Share this folder with Katalon Support team for assistance.
