import type { CaseStudy } from './types';

const study: CaseStudy = {
  "slug": "configurable-invoice-ocr",
  "projectId": 16,
  "published": "2026-11-11",
  "modified": "2026-11-11",
  "text": {
    "en": {
      "title": "Configurable invoice extraction with human review",
      "metaTitle": "Configurable invoice OCR · Case study",
      "metaDescription": "Invoice OCR built at OpenView around 2019: configurable fields, JPG and PDF inputs, human review and validated JSON output.",
      "sector": "Document processing · c. 2019 · OpenView",
      "lead": "Around 2019, I built an invoice OCR application at OpenView to extract information from JPG and PDF invoices while letting users choose what data to capture.",
      "brief": {
        "mission": "Build a configurable invoice OCR application with human review",
        "result": "Configurable extraction with validated JSON output"
      },
      "sections": [
        {
          "heading": "The challenge",
          "paragraphs": [
            "Invoices contain different information, and users may need particular fields, such as an invoice ID, or broader extraction."
          ]
        },
        {
          "heading": "What I built",
          "paragraphs": [
            "I built the application using Python, Tesseract, TensorFlow and Rossum AI. Users could configure the fields they wanted extracted or request broader extraction. They could then review and validate the result before receiving it in JSON format."
          ]
        }
      ],
      "result": "A configurable invoice extraction workflow with human validation before structured JSON is returned."
    },
    "fr": {
      "title": "Extraire les données des factures avec configuration et validation humaine",
      "metaTitle": "OCR de factures configurable · Étude de cas",
      "metaDescription": "Une application OCR développée chez OpenView vers 2019 : factures JPG et PDF, champs configurables, validation humaine et résultat JSON.",
      "sector": "Traitement documentaire · Vers 2019 · OpenView",
      "lead": "Vers 2019, j’ai développé chez OpenView une application OCR pour extraire les informations de factures JPG et PDF, en laissant l’utilisateur choisir les données à récupérer.",
      "brief": {
        "mission": "Développer une application OCR de factures configurable avec validation humaine",
        "result": "Une extraction configurable avec un résultat JSON validé"
      },
      "sections": [
        {
          "heading": "Le défi",
          "paragraphs": [
            "Les factures contiennent des informations variées. Selon le besoin, l’utilisateur souhaite extraire certains champs, comme le numéro de facture, ou un ensemble plus large de données."
          ]
        },
        {
          "heading": "Ce que j’ai développé",
          "paragraphs": [
            "J’ai développé l’application avec Python, Tesseract, TensorFlow et Rossum AI. L’utilisateur pouvait configurer les champs à extraire ou demander une extraction plus large. Il pouvait ensuite vérifier et valider le résultat avant de le recevoir au format JSON."
          ]
        }
      ],
      "result": "Un parcours configurable d’extraction de factures, avec validation humaine avant la restitution des données structurées en JSON."
    },
    "ar": {
      "title": "استخراج بيانات الفواتير بخيارات مخصّصة ومراجعة بشرية",
      "metaTitle": "استخراج بيانات الفواتير بتقنية OCR · دراسة حالة",
      "metaDescription": "تطبيق طُوّر لدى OpenView نحو 2019 لاستخراج بيانات فواتير JPG وPDF، مع اختيار الحقول ومراجعة بشرية ونتيجة JSON.",
      "sector": "معالجة المستندات · نحو 2019 · OpenView",
      "lead": "نحو عام 2019، طوّرت لدى OpenView تطبيقًا للتعرّف الضوئي على النصوص في فواتير JPG وPDF، مع إتاحة اختيار البيانات المطلوب استخراجها.",
      "brief": {
        "mission": "تطوير تطبيق قابل للتخصيص لاستخراج بيانات الفواتير مع مراجعة بشرية",
        "result": "استخراج قابل للتخصيص مع بيانات JSON معتمدة"
      },
      "sections": [
        {
          "heading": "التحدي",
          "paragraphs": [
            "تختلف المعلومات الواردة في الفواتير، وقد يحتاج المستخدم إلى حقول معيّنة، مثل رقم الفاتورة، أو إلى استخراج مجموعة أوسع من البيانات."
          ]
        },
        {
          "heading": "ما طوّرته",
          "paragraphs": [
            "طوّرت التطبيق باستخدام Python وTesseract وTensorFlow وRossum AI. كان المستخدم يحدّد الحقول المطلوبة أو يطلب استخراجًا أوسع للمعلومات، ثم يراجع النتيجة ويعتمدها قبل استلامها بصيغة JSON."
          ]
        }
      ],
      "result": "مسار قابل للتخصيص لاستخراج بيانات الفواتير، مع مراجعة بشرية قبل إرجاع النتيجة المنظّمة بصيغة JSON."
    }
  }
};

export default study;
