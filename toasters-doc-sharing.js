window.toastActionMsgCustom = {
    notes: {
        mutate: {
            success: "Document créé avec succès",
            error: "Erreur avec le document créé", // From the second script, as it's more specific.
        },
        delete: {
            success: "Document supprimé",
            error: "Erreur lors de la suppression du document",
        },
        list: {
            error: "Il y a eu une erreur lors du traitement de votre demande",
        },
        search: {
            error: "Erreur de recherche",
        },
    },
    shareNotes: {
        switchShare: {
            error:
                "Une erreur s'est produite lors de la tentative de partage de votre document",
        },
        addEmailToList: {
            error: {
                alreadyExists: "L'e-mail existe déjà dans la liste partagée",
                noSelfSharing: "Vous ne pouvez pas partager un document avec vous-même!",
            },
        },
        validateEmails: {
            success: "Document partagé avec succès", // Choose based on preference, both are valid.
            error: {
                submitError: "Il y avait une erreur",
                dirtyInput:
                    "Assurez-vous d'avoir ajouté tous les e-mails de l'entrée avant de soumettre", // From the first script, seems more detailed.
            },
        },
        cloneNote: {
            success: "Copie du document enregistrée.",
            error: "Erreur de copie du document", // From the second script, as it's more specific.
        },
        removeSharedInvitation: {
            success: "Document supprimé",
            error: "Erreur lors de la suppression du document",
        },
        acceptedInvitation: {
            success: "Note ajoutée à la page des documents partagés avec moi",
        },
    },
    navigation: {
        notFound: "pas trouvé",
        invalidUrlInvitation: "URL invalide. Type ou identifiant manquant",
    }
};

window.modalMsgCustom = {
    form: {
        error: {
            general: "Une erreur est survenue. Si le problème persiste, merci d'envoyer un mail à contact@ordotype.fr",
            exceededStorage: `Vous &ecirc;tes &agrave; court de stockage, vous pouvez en acheter sur <a native href="/membership/stockage-supplementaire">cette page</a>`,
        },
    }
};

window.validationMsgCustom = {
   mixed: {
      oneOf: "Veuillez sélectionner le type d'ordonnance"
   },
    string: {
    email: "Email non valide"
  }
};
