import type { ProcedurePageData } from './components/ClinicalProcedurePage';
import { CLINICAL_PROCEDURES as DATA } from './clinicalProceduresData.js';

export const CLINICAL_PROCEDURES: Record<string, ProcedurePageData> = DATA as Record<string, ProcedurePageData>;
